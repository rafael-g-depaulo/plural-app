import api from "Api"

export const getEvent = post_id => api
  .get(`/api/event/${post_id}`, { withCredentials: false })

export const listAllEvents = () => api
  .get("/api/event", { withCredentials: false })
  