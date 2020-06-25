const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken(req, res, next) {
    const token = req.cookies.token;

    console.log("Provided token:", token);

    if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
        if (err) {
          console.log("\n[ERROR]", err.message);

          return res.status(401).json({ error: "Unauthorized access." });
        }

        req.decoded = decoded;
        next();
      });
    } else {
      console.log("\n[ERROR] No token provided.\n");

      return res.status(403).json({ error: "No token provided." });
    }
  },
};
