import express from "express";
import GoogleRouter from "./GoogleRouter";
import FacebookRouter from "./FacebookRouter";
import UserRouter from "./UserRouter";
import AuthRouter from "./AuthRouter";
import MappingRouter from "./MappingRouter";
import AuthMiddleware from "../Middlewares/auth_middleware";
import User from "../models/User";

import BlogRouter from './BlogRouter'
import EventRouter from './EventRouter'

// use dependency injection in module
export default ({ passport }, config = { mergeParams: true }) => express.Router(config)
// add routes
  .use(/\/blogs?/, BlogRouter({}, config))
  .use(/\/events?/, EventRouter({}, config))
  .use("/auth/facebook", FacebookRouter({ passport }, config))
  .use("/auth/google", GoogleRouter({ passport }, config))
  .use("/user", UserRouter({AuthMiddleware}, config))
  .use("/auth", AuthRouter({}, config))
  .use("/search", MappingRouter({ User }, config));
