import api from "Api";

export const listAllEvents = () => api
  .get("/api/event", { withCredentials: false })
