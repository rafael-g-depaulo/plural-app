import { Router } from "express";
import UsersController from "controllers/users_controller";
import AuthMiddleware from "Middlewares/AuthMiddleware";

export default ({}, options) => {
  return Router(options)
    .post("/register", UsersController.create)
    .get("/verify-email/:token", UsersController.verifyEmail)
    .get(
      "/current",
      AuthMiddleware.verifyToken,
      UsersController.showCurrentUser
    )
    .put(
      "/update/is-lgbtq",
      AuthMiddleware.verifyToken,
      UsersController.updateIsLgbtq
    );
};
