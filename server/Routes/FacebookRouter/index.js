import { Router } from "express";

export default ({ PassportConfig, passport }, options) => {
  PassportConfig.FacebookAuth(passport);

  return Router(options)
    .get("/", passport.authenticate("facebook", { session: false }))
    .get(
      "/callback",
      passport.authenticate("facebook", {
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
