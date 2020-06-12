import { Router } from "express";
const AuthController = require("../../controllers/auth_controller");
const AuthMiddleware = require("../../Middlewares/auth_middleware");

export default ({}, options) => {
  return Router(options)
    .post("/login", AuthController.login)
    .get("/verify-token", AuthMiddleware.verifyToken, function (req, res) {
      return res.status(200).json({message: "The provided token is valid"});
    });
};
