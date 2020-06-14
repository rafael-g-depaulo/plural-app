import { Router } from "express";
const UsersController = require("../../controllers/users_controller");

export default ({}, options) => {
  return Router(options).post("/register", UsersController.create).get("/verify-email/:token", UsersController.verifyEmail);
};
