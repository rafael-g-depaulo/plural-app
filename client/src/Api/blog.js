import api from "Api"

export const getBlogPost = post_id => api
  .get(`/api/blogs/${post_id}`, { withCredentials: false })
  
export const listAll = () => api
  .get("/api/blog",  { withCredentials: false })
  