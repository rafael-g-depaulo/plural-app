// import express (after npm install express)
import express from "express";
import path from "path";
import dotenv from "dotenv";

require("./database/connection");

// use .env config file
dotenv.config();

// create new express app and save it as "app"
const app = express();

//! setup middlewares
// to allow cors from desirable origins
import cors from "Middlewares/cors";
app.use(cors);

// To parse cookies from the HTTP Request
import cookieParser from "cookie-parser";
app.use(cookieParser());

// body parser to parse http requests' bodies
import bodyParser from "body-parser";
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//! server configuration
const { PORT = "8000", NODE_ENV = "development" } = process.env;

// Handle user authentication
const passport = require("passport");
const PassportConfig = require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

PassportConfig.GoogleAuth(passport);
PassportConfig.FacebookAuth(passport);

//! setup routes
import Router from "Routes";
app.use("/api", Router({ passport }));

// create a route for the app
app.get("/api", (req, res) => {
  // if not in production, show error message
  if (NODE_ENV !== "production") {
    res.json({
      message:
        "this is my starter project for a Node.js API with a postgres server connection",
      PS:
        "please remember to set up env vars in ./.env (example is in ./env.example",
    });
  }
});

// if in production, redirect any requests that dont have an API path, map to react bundle
if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/. Time: ${new Date()}`);
});
