import axios from "axios"

export const getEvent = post_id => axios
  .get(`/api/event/${post_id}`)
