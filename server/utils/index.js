const jwt = require("jsonwebtoken");

module.exports = {
  signToken(id, email) {
    const token = jwt.sign(
      { user: { id, email } },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: parseInt(process.env.TOKEN_EXPIRATION_TIME) }
    );

    return token;
  },
};
