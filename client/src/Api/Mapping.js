import api from "Api";

export const createMapping = (data) =>
  api.post("/api/search/users/mapping", data, { withCredentials: true });

export const updateMapping = (data) =>
  api.put("/api/search/users/mapping", data, { withCredentials: true });
