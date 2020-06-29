const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Mapping = require("/models/Mapping");
const Utils = require("../utils");

async function getUserFromEmail(email) {
  console.log(`\nSearching for user with email: ${email}\n`);

  const user = await User.findOne({
    where: { email: email },
    include: [
      {
        model: Mapping,
        as: "mapping",
      },
    ],
  });

  user === null
    ? console.log("\nNo records found.\n")
    : console.log(`\nFound the following user: ${JSON.stringify(user)}\n`);

  return user;
}

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;

    console.log("Received JSON params:", req.body);

    const errorMessage =
      "The authentication failed. The credentials provided are invalid.";

    const user = await getUserFromEmail(email);

    // Testar
    if (user === undefined) {
      console.log("[ERROR]", errorMessage);

      return res.status(401).json({ error: errorMessage });
    }

    const userId = user.id;
    const passwordHash = user.password;

    if (!bcrypt.compareSync(password, passwordHash)) {
      console.log("[ERROR]", errorMessage);

      return res.status(401).json({ error: errorMessage });
    }

    // Verify if user is already verified.
    if (user.active !== true) {
      console.log("The user must verify its account.");
      // return res.status(401).json({error: "The user must verify its account."})
    }

    const token = await Utils.signToken(userId, email);

    const currentUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      birthdate: user.birthdate,
      phoneNumber: user.phone_number,
      isLgbtq: user.is_lgbtq,
      active: user.active,
      city: user.city,
      provider: user.provider,
      providerId: user.providerId,
      mapping: user.mapping,
    };

    if (token === null) {
      res
        .status(500)
        .json({ error: "An internal error has occurred. Try again." });
    }

    const successMessage =
      "The credentials provided are valid. Successfully logged in.";

    console.log("[SUCCESS]", successMessage);

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
      })
      .json({ currentUser, message: successMessage });
  },
};
