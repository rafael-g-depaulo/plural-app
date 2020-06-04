
import express from 'express'

import User from '../models/User'

// import EmailRouter from './email'
import MappingRouter from './mapping'


// use dependency injection in module
export default ({}, config = { mergeParams: true }) => express.Router(config)
// add routes
  // .use('/email', EmailRouter({}, config))
  //rota para o mapping que voce acessa atraves de user, pq mapping nao pode existir sem user
  .use('/', MappingRouter({User}, config))
