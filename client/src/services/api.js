import { setup } from "axios-cache-adapter";

const api = setup({
  baseURL: "http://localhost:3000",

  cache: {
    maxAge: 15 * 60 * 1000,
  },
});

// Send a GET request to some REST api
api.get("/login").then(async (response) => {
  console.log("Request response:", response);

  const length = await api.cache.length();

  console.log(api.cache.response());
  console.log("Cache store length:", length);
});

export default api;
