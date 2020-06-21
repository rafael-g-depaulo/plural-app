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
        failureRedirect: "/",
        session: false,
      }),
      (req, res) => {
        return res
          .status(200)
          .cookie("token", req.token, {
            httpOnly: true,
          })
          .redirect(process.env.CLIENT_URL);
      }
    );
};
