import api from "Api";

export const createMapping = (data) =>
  api.post("/api/search/users/mapping", data, {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  });
