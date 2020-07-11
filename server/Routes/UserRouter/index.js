import { Router } from "express";
import UsersController from "controllers/users_controller";
import AuthMiddleware from "Middlewares/AuthMiddleware";
import User from "models/User";
import jwt from "jsonwebtoken"
import utils from "utils";

export default ({}, options) => {
  return Router(options)
    .post("/register", UsersController.create)
    .get("/verify-email/:token", UsersController.verifyEmail)
    .get("/id/:id", AuthMiddleware.verifyToken, UsersController.getUser)
    .get(
      "/current",
      AuthMiddleware.verifyToken,
      UsersController.showCurrentUser
    )
    .put(
      "/update/is-lgbtq",
      AuthMiddleware.verifyToken,
      UsersController.updateIsLgbtq
    )
    .put("/update", AuthMiddleware.verifyToken, UsersController.update)
    .put(
      "/password-change",
      AuthMiddleware.verifyToken,
      UsersController.passwordChange
    )
    .post("/password-reset", UsersController.passwordReset)
    .post(
      "/password-reset/callback",
      AuthMiddleware.verifyPasswordResetToken,
      UsersController.passwordResetCallback
    )
    .post(
      "/resend-confirmation-email",
      AuthMiddleware.verifyToken,
      async (req, res, next) => {
        console.log("sdfsfsdfdsf")
        const token = req.cookies.token;

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, async function(err, decoded) {
          if (err) {
            console.log("\n[ERROR]", err.message);
            return res.status(401).json({
              error: "Unauthorized access. The email couldn't be verified.",
            });
          }
          
          const { id } = decoded.user
          User.findOne({ where: { id } })
            .then(user => {
              utils.sendConfirmationEmail(user.dataValues, token)
              res.json("email sent")
            })
            .catch(aa => res.status(500).json({ err: "error with user email confirmation" }))
        })
      }
    )
};
