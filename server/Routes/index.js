import express from 'express'

import BlogRouter from './BlogRouter'

// use dependency injection in module
export default ({}, config = { mergeParams: true }) => express.Router(config)
// add routes
  .use("/blog", BlogRouter({}, config))
  .use("/blogs", BlogRouter({}, config))