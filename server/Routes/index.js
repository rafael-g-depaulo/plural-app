import express from 'express'

import BlogRouter from './BlogRouter'
import EventRouter from './EventRouter'

// use dependency injection in module
export default ({}, config = { mergeParams: true }) => express.Router(config)
// add routes
  .use(/\/blogs?/, BlogRouter({}, config))
  .use(/\/events?/, EventRouter({}, config))