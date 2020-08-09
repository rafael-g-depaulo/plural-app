import api from "Api"

export const getBlogPost = post_id => api
  .get(`/api/blogs/${post_id}`, { withCredentials: false })
  
export const listAll = () => Promise.resolve()
  .then(() => {
    console.log("ABOUT TO CALL API FOR BLOGS")
    return api.get("/api/blog",  { withCredentials: false })
  })
  .then((a) => { console.log("RESOLVED WITH", a); return a})
  