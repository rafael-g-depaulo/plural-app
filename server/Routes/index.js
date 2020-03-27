
import express from 'express'

// import EmailRouter from './email'

// use dependency injection in module
export default ({}, config = { mergeParams: true }) => express.Router(config)
// add routes
  // .use('/email', EmailRouter({}, config))
