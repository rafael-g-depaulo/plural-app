import axios from "axios"

export const getBlogPost = post_id => axios
  .get(`/api/blogs/${post_id}`)
