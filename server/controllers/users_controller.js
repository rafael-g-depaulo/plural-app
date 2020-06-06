const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = {
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
      });

      res.status(200).send({ message: "The user was successfully created." });
    } catch (error) {
      console.log(error);
      res.status(422).send({
        error: "An error occurred while registering.",
      });
    }
  },
};
