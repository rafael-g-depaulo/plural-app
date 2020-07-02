const bcrypt = require("bcrypt");
const User = require("../models/User");
const utils = require("../utils");
const jwt = require("jsonwebtoken");

module.exports = {
  async showCurrentUser(req, res) {
    return res.status(200).send({ current_user: req.decoded.user });
  },
  async create(req, res) {
    const {
      email,
      email_confirm,
      password,
      password_confirm,
      name,
      day,
      month,
      year,
      phone,
      city,
    } = req.body;

    const hashCost = 10;

    
    if(email !== email_confirm || password !== password_confirm)
    {
      return res.status(400).json({message: "Email or password doesn't match."})
    }
    
    try {
      const passwordHash = await bcrypt.hash(password, hashCost);

      const user = await User.create({
        email: email,
        password: passwordHash,
        name: name,
        birthdate: `${month}/${day}/${year}`,
        phone_number: phone,
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
};
