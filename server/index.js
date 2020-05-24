// import express (after npm install express)
import express from "express";
import path from "path";
import dotenv from "dotenv";

// use .env config file
dotenv.config();

// create new express app and save it as "app"
const app = express();

//! setup middlewares
// to allow cors from desirable origins
import cors from "Middlewares/cors"
app.use(cors)

// To parse cookies from the HTTP Request
import cookieParser from "cookie-parser";
app.use(cookieParser());

// body parser to parse http requests' bodies
import bodyParser from "body-parser";
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//! server configuration
const { PORT = "8000", NODE_ENV = "development" } = process.env;

//! setup routes
import Router from 'Routes'
app.use('/api', Router({}))

// create a route for the app
app.get('/api', (req, res) => {
  // if not in production, show error message
  if (NODE_ENV !== "production") {
    res.json({
      message: "this is my starter project for a Node.js API with a postgres server connection",
      PS: "please remember to set up env vars in ./.env (example is in ./env.example",
    })
  }
})

// if in production, redirect any requests that dont have an API path, map to react bundle
if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
  })
}

const passport = require("passport");

const PassportConfig = require("./config/passport.js");

app.use(passport.initialize())
app.use(passport.session());

// Setup passport module with facebook config
PassportConfig.FacebookAuth(passport);

app.get("/api/auth/facebook", passport.authenticate("facebook", {session: false}));

// Handle callback after the user gets authenticated
app.get(
  "/api/auth/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/",
    session: false
  }),
  (req, res) => {
    return res
      .status(200)
      .cookie("jwt", "test", {
        httpOnly: true,
      })
      .redirect(process.env.CLIENT_URL);
  }
);

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
