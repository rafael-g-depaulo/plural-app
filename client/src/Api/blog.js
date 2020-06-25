import axios from "axios"

export const ListAll = post_id => axios
  .get(`/blogs/${post_id}`)
