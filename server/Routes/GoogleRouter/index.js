import { Router } from "express";

export default ({ passport }, options) => {
  return Router(options)
    .get(
      "/",
      passport.authenticate("google", {
        session: false,
        scope: [
          "https://www.googleapis.com/auth/userinfo.profile",
          "https://www.googleapis.com/auth/userinfo.email",
        ],
      })
    )
    .get(
      "/callback",
      passport.authenticate("google", {
        failureRedirect: process.env.CLIENT_URL,
        session: false,
      }),
      (req, res) => {
        console.log("google auth ok")
        return res
          .status(200)
          .cookie("token", req.token, {
            httpOnly: true,
          })
          .redirect(process.env.CLIENT_URL);
      }
    );
};
