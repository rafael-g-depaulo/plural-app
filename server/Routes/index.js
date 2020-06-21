import express from "express";

import GoogleRouter from "./GoogleRouter";
import FacebookRouter from "./FacebookRouter";
import BlogRouter from './BlogRouter'
import EventRouter from './EventRouter'
import UserRouter from "./UserRouter";
import AuthRouter from "./AuthRouter";
import MappingRouter from "./MappingRouter";

import User from "models/User";

import AuthMiddleware from "Middlewares/auth_middleware"

// use dependency injection in module
export default ({ passport }, config = { mergeParams: true }) => express.Router(config)
  .use("/auth/facebook", FacebookRouter({ passport }, config))
  .use("/auth/google", GoogleRouter({ passport }, config))
  .use("/user", UserRouter({}, config))
  .use("/auth", AuthRouter({}, config))
  .use(/\/blogs?/, BlogRouter({}, config))
  .use(/\/events?/, EventRouter({}, config))
  .use("/search", MappingRouter({ User }, config))
