const bcrypt = require("bcrypt");
const User = require("../models/User");
const utils = require("../utils");
const jwt = require("jsonwebtoken");

module.exports = {
  async showCurrentUser(req, res) {
    return res.status(200).send({ current_user: req.decoded.user });
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

    if (await utils.sendPasswordResetEmail(user, token)) {
      return res
        .status(200)
        .send({ data: "Successfully sent password reset email." });
    }

    return res
      .status(500)
      .send({ error: "An error occurred while sending email. Try again." });
  },
  async passwordResetCallback(req, res) {
    const { password } = req.body;
    
    try {
      const user = await User.update(
        { password },
        { where: { id: req.decoded.user.id } }
      );
      res
        .status(200)
        .json({ message: "The user's password was successfully updated." });
    } catch {
      res.status(422).json({
        message: "An error occurred while updating password. Try again. ",
      });
    }
  },
};
