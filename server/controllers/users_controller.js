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
  } = user;

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
  },
  async create(req, res) {
    const { email, password, name, birthdate, phoneNumber, city } = req.body;

    const hashCost = 10;

    try {
      const passwordHash = await bcrypt.hash(password, hashCost);

      const user = await User.create({
        email: email,
        password: passwordHash,
        name: name,
        birthdate: birthdate,
        phone_number: phoneNumber,
        city: city,
        active: false,
      });

      const token = utils.signToken(user.dataValues.id, user.dataValues.email);

      utils.sendConfirmationEmail(user.dataValues, token);

      res.status(200).send({ message: "The user was successfully created." });
    } catch (error) {
      console.log(error);
      res.status(422).send({
        error: "An error occurred while registering.",
      });
    }
  },
  async update(req, res) {
    try {
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

      console.log(user[1]);

      res.status(200).send({
        updatedUser: destructureUser(user),
        message: "The user was successfully updated.",
      });
    } catch (error) {
      console.log(error);

      res.status(422).send({
        error: "An error occurred while updating LGBTQ status.",
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

        res
          .status(200)
          .json({ message: "The email was successfully verified." });
      } catch {
        res.status(422).json({
          message: "An error occurred while verifying email. Try again. ",
        });
      }
    });
  },
};
