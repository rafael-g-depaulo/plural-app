import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
  responseType: "json",
  proxy: {
    host: "localhost",
    port: 8000,
  },
});

export const getCurrentUser = () => {
  return api.get("/user/current", {withCredentials: true});
};
