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

      const token = utils.signToken(
        user.dataValues.id,
        user.dataValues.email,
        user.dataValues.active,
        user.dataValues.is_lgbtq
      );

      utils.sendConfirmationEmail(user.dataValues, token);

      res.status(200).send({ message: "The user was successfully created." });
    } catch (error) {
      console.log(error);
      res.status(422).send({
        error: "An error occurred while registering.",
      });
    }
  },
  async updateIsLgbtq(req, res) {
    const { isLgbtq } = req.body;

    console.log(isLgbtq);

    try {
      const user = await User.findOne({ where: { id: req.decoded.user.id } });

      user.is_lgbtq = isLgbtq;

      console.log(user);

      await user.save();

      res
        .status(200)
        .send({
          updatedUser: {
            id: user.id,
            email: user.email,
            active: user.active,
            isLgbtq: user.is_lgbtq,
          },
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
