import axios from "axios"

export const ListAll = post_id => axios
  .get(`/api/blogs/${post_id}`)
