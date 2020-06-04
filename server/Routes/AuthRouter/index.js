import { Router } from "express";
const AuthController = require("../../controllers/auth_controller");

export default ({}, options) => {
  return Router(options)
    .post("/login", AuthController.login)
};
