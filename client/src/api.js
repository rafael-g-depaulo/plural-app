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
  return api.get("/user/current", { withCredentials: true });
};

export const passwordReset = (email) => {
  return api.post("/user/password-reset", { email }, { withCredentials: true });
};

export const passwordResetCallback = (password, token) => {
  return api.post(
    `/user/password-reset/callback`,
    { password },
    {
      headers: { Authorization: `${token}` },
      withCredentials: true,
    }
  );
};
