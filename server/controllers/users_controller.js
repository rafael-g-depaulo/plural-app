const bcrypt = require("bcrypt");
const User = require("/models/User");
const Mapping = require("/models/Mapping");
const utils = require("../utils");
const jwt = require("jsonwebtoken");

function destructureUser(user) {
  const {
    id,
    email,
    name,
    birthdate,
    phone_number: phoneNumber,
    is_lgbtq: isLgbtq,
    active,
    city,
    provider,
    provider_id: providerId,
    mapping,
    is_mapping_participant: isMappingParticipant,
  } = user ?? {};

  return {
    id,
    email,
    name,
    birthdate,
    phoneNumber,
    active,
    isLgbtq,
    city,
    provider,
    providerId,
    mapping,
    isMappingParticipant,
  };
}

module.exports = {
  async showCurrentUser(req, res) {
    console.log("Decoded:", req.decoded.user.id);

    try {
      const user = await User.findOne({
        where: { id: req.decoded.user.id },
        include: [
          {
            model: Mapping,
            as: "mapping",
          },
        ],
      });

      return res.status(200).send({
        current_user: destructureUser(user),
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ error: "error finding user" });
    }
  },
  async getUser(req, res) {
    console.log("User ID:", req.params.id);

    const user = await User.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Mapping,
          as: "mapping",
        },
      ],
    });

    return res.status(200).send({
      user: destructureUser(user),
    });
  },
  async create(req, res) {
    const {
      email,
      email_confirm,
      password,
      password_confirm,
      name,
      birthdate,
      phone_number,
      city,
    } = req.body;

    const hashCost = 10;

    if (email !== email_confirm || password !== password_confirm) {
      return res
        .status(400)
        .json({ message: "Email or password doesn't match." });
    }

    try {
      const passwordHash = await bcrypt.hash(password, hashCost);

      const user = await User.create({
        email,
        password: passwordHash,
        name,
        birthdate,
        phone_number,
        city,
        active: false,
      });

      const token = await utils.signToken(
        user.dataValues.id,
        user.dataValues.email
      );

      utils.sendConfirmationEmail(user.dataValues, token);

      const userObject = user.dataValues;
      delete userObject.password;

      return res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
        })
        .json({ user: userObject });
    } catch (error) {
      console.log(error);
      res.status(422).send({
        error: "An error occurred while registering.",
      });
    }
  },
  async update(req, res) {
    console.log("passwoooooooooord", req.body.password);

    try {
      if (req.body.password !== undefined) {
        console.log("passwoooooooooord", req.body.password);

        if (req.body.password !== req.body.password_confirm) {
          res.status(400).send({
            error: "Passwords doesn't match.",
          });
        } else {
          req.body.password = await bcrypt.hash(req.body.password, 10);
        }
      }

      const user = await User.update(req.body, {
        where: { id: req.decoded.user.id },
        include: [
          {
            model: Mapping,
            as: "mapping",
          },
        ],
        returning: true,
        plain: true,
      });

      res.status(200).send({
        updatedUser: destructureUser(user[1]),
        message: "The user was successfully updated.",
      });
    } catch (error) {
      console.log(error);

      res.status(422).send({
        error: "An error occurred while updating user.",
      });
    }
  },
  async updateIsLgbtq(req, res) {
    const { isLgbtq } = req.body;

    try {
      const user = await User.findOne({
        where: { id: req.decoded.user.id },
        include: [
          {
            model: Mapping,
            as: "mapping",
          },
        ],
      });

      user.is_lgbtq = isLgbtq;

      await user.save();

      res.status(200).send({
        updatedUser: destructureUser(user),
        message: "The user's LGBTQ status was successfully updated.",
      });
    } catch (error) {
      console.log(error);

      res.status(422).send({
        error: "An error occurred while updating LGBTQ status.",
      });
    }
  },
  async verifyEmail(req, res) {
    const token = req.params.token;

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, async function(
      err,
      decoded
    ) {
      if (err) {
        console.log("\n[ERROR]", err.message);

        return res.status(401).json({
          error: "Unauthorized access. The email couldn't be verified.",
        });
      }

      try {
        const user = await User.update(
          { active: true },
          { where: { id: decoded.user.id } }
        );

        res.status(200).redirect(process.env.CLIENT_URL);
      } catch {
        res.status(422).redirect(process.env.CLIENT_URL);
      }
    });
  },
  async passwordChange(req, res) {
    const { password } = req.body;

    const hashCost = 10;

    try {
      const passwordHash = await bcrypt.hash(password, hashCost);

      const user = await User.update(
        { password: passwordHash },
        { where: { id: req.decoded.user.id } }
      );

      res
        .status(200)
        .json({ message: "The user's password was successfully updated." });
    } catch (err) {
      res.status(422).json({
        message: "An error occurred while updating password. Try again. ",
      });
    }
  },
  /*
    This method generates a simplified token with the user's email, and send it via email.
    Then the user will be redirected to the password reset screen
  */
  async passwordReset(req, res) {
    const { email } = req.body;

    console.log("Searching for user with email:", email);

    const user = await User.findOne({ where: { email: email } });

    if (user === null) {
      console.log("\nNo records found.\n");

      return res.status(404).send({ error: "No records found." });
    }

    //If the user is valid, sign password reset token and send the recovery link via email
    console.log(`\nFound the following user: ${JSON.stringify(user)}\n`);

    const token = utils.signPasswordResetToken(user.id, user.email);

    utils.sendPasswordResetEmail(user, token);

    return res
      .status(200)
      .send({ data: "Successfully sent password reset email." });
  },
  async passwordResetCallback(req, res) {
    const { password } = req.body;

    const hashCost = 10;

    try {
      const passwordHash = await bcrypt.hash(password, hashCost);

      const user = await User.update(
        { password: passwordHash },
        { where: { id: req.decoded.user.id } }
      );

      res
        .status(200)
        .json({ message: "The user's password was successfully updated." });
    } catch (err) {
      res.status(422).json({
        message: "An error occurred while updating password. Try again. ",
      });
    }
  },
};
