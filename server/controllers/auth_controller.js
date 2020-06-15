const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Utils = require("../utils");

async function getUserFromEmail(email) {
  console.log(`\nSearching for user with email: ${email}\n`);

  const user = await User.findOne({ where: { email: email } });

  user == null
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
    if (user == undefined) {
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
    if(user.active !== true)
    {
      return res.status(401).json({error: "The user must verify its account."})
    }

    const token = await Utils.signToken(userId, email);

    if (token == null) {
      res
        .status(500)
        .json({ error: "An internal error has occurred. Try again." });
    }

    const successMessage =
      "The credentials provided are valid. Succesfully logged in.";

    console.log("[SUCCESS]", successMessage);

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
      })
      .json({ message: successMessage });
  },
};
