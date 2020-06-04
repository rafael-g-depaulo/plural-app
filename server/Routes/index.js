import express from "express";
const PassportConfig = require("../config/passport");

import GoogleRouter from "./GoogleRouter";
import FacebookRouter from "./FacebookRouter";

// use dependency injection in module
export default ({ passport }, config = { mergeParams: true }) =>
  express
    .Router(config)
    .use("/auth/facebook", FacebookRouter({ PassportConfig, passport }, config))
    .use("/auth/google", GoogleRouter({ PassportConfig, passport }, config));

// add routes
// .use('/email', EmailRouter({}, config))
