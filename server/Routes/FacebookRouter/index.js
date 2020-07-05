import { Router } from "express";

export default ({ passport }, options) => {
  return Router(options)
    .get("/", passport.authenticate("facebook", { scope : ['email'],  session: false }))
    .get(
      "/callback",
      passport.authenticate("facebook", {
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
