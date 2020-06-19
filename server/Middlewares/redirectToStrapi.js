export const redirectToStrapi = (pathTransform = a => a) => (req, res, next) => {

  // get the path without /api at the start
  // i.e.: "/api/blogs" becomes "/blogs"
  const path = /^\/api(\/.*)$/.exec(req.originalUrl)[1]
  const redirectUrl = `https://plural-server.herokuapp.com${pathTransform(path)}`

  res.redirect(redirectUrl)
}

export default redirectToStrapi