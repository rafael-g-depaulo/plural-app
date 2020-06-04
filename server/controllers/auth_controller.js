const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

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

    jwt.sign(
      { user: { id: userId, email } },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: parseInt(process.env.TOKEN_EXPIRATION_TIME) },
      (error, token) => {
        const successMessage =
          "The credentials provided are valid. Succesfully logged in.";

        console.log("[SUCCESS]", successMessage);

        return res
          .status(200)
          .cookie("token", token, {
            httpOnly: true,
          })
          .json({ message: successMessage });
      }
    );
  }
};
