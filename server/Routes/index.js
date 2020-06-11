import express from "express";
import GoogleRouter from "./GoogleRouter";
import FacebookRouter from "./FacebookRouter";
import UserRouter from "./UserRouter";
import AuthRouter from "./AuthRouter";
import MappingRouter from "./MappingRouter/createMapping";
import SearchMappingRouter from "./MappingRouter/searchUserMapping";
import User from "../models/User";

// use dependency injection in module
export default ({ passport }, config = { mergeParams: true }) =>
  express
    .Router(config)
    .use("/auth/facebook", FacebookRouter({ passport }, config))
    .use("/auth/google", GoogleRouter({ passport }, config))
    .use("/user", UserRouter({}, config))
    .use("/auth", AuthRouter({}, config))
    .use("/", MappingRouter({ User }, config))
    .use("/search", SearchMappingRouter({}, config));
