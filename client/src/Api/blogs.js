import axios from "axios";

export const listAll = () => {
  return axios.get("/api/blog");
};
