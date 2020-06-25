import axios from "axios"

export const ListAll = post_id => axios
  .get(`/event/${post_id}`)
