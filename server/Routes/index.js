
import express from 'express'

// use dependency injection in module
export default ({}, config = { mergeParams: true }) => express.Router(config)
// add routes