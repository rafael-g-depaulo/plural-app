export const StrapiBaseUrl = process.env.NODE_ENV === "production"
  ? "https://plural-server.herokuapp.com"
  : "http://localhost:1337"