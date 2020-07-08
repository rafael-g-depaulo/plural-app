import { Router } from "express";

export default ({ passport }, options) => {
  return Router(options)
    .get("/", (req, res, next) => {
      console.log("facebook auth attempt")
      next()
    }, passport.authenticate("facebook", { scope : ['email'],  session: false }))
    .get(
      "/callback",
      passport.authenticate("facebook", {
        failureRedirect: process.env.CLIENT_URL,
        session: false,
      }),
      (req, res) => {
        console.log("facebook auth ok")
        return res
          .status(200)
          .cookie("token", req.token, {
            httpOnly: true,
          })
          .redirect(process.env.CLIENT_URL);
      }
    );
};
