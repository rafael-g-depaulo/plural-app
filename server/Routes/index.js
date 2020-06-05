import express from "express";
import GoogleRouter from "./GoogleRouter";
import FacebookRouter from "./FacebookRouter";
import UserRouter from "./UserRouter";
import AuthRouter from "./AuthRouter";

// use dependency injection in module
export default ({ passport }, config = { mergeParams: true }) =>
  express
    .Router(config)
    .use("/auth/facebook", FacebookRouter({ passport }, config))
    .use("/auth/google", GoogleRouter({ passport }, config))
    .use("/user", UserRouter({}, config))
    .use("/auth", AuthRouter({}, config));

// add routes
// .use('/email', EmailRouter({}, config))
