import { Router } from "express"
import redirectToStrapi from "Middlewares/redirectToStrapi"

export default ({}, config) => Router(config)
  .use("*", redirectToStrapi(path => path.replace(/blog(\/|$)/, "blogs/")))
