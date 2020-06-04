import { Router } from "express";

export default ({ PassportConfig, passport }, options) => {
  PassportConfig.GoogleAuth(passport);

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
        failureRedirect: "/",
        session: false,
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
};
