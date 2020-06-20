import axios from 'axios'

export const listAll = () => axios
  .get("/api/blog")
  .then(response => response.data)