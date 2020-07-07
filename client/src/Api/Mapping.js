import api from "Api";

export const createMapping = (data) =>
  api.post("/api/search/users/mapping", data, {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  });

export const search = (jobs) => api.post("/api/search/users/jobs", { jobs });

export const updateMapping = (data) =>
  api.put("/api/search/users/mapping", data, { withCredentials: true });
