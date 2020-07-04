import { Router } from "express";
import UsersController from "controllers/users_controller";
import AuthMiddleware from "Middlewares/AuthMiddleware";

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
    );
};
