export const redirectToStrapi = (pathTransform = a => a) => (req, res, next) => {

  // setup domain to redirect request to
  const domain = process.env.NODE_ENV === "production"
    ? "https://plural-server.herokuapp.com"
    : "http://localhost:1337"
    
  // get the path without /api at the start
  // i.e.: "/api/blogs" becomes "/blogs"
  const path = /^\/api(\/.*)$/.exec(req.originalUrl)[1]
  const redirectUrl = `${domain}${pathTransform(path)}`

  // redirect to Strapi
  res.redirect(redirectUrl)
}

export default redirectToStrapi