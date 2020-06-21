import { Router } from "express";
import AuthController from "controllers/auth_controller"
import AuthMiddleware from "Middlewares/AuthMiddleware"

export default ({}, options) => {
  return Router(options)
    .post("/login", AuthController.login)
    .get("/verify-token", AuthMiddleware.verifyToken, function (req, res) {
      return res.status(200).json({message: "The provided token is valid"});
    });
};
