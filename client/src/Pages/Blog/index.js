import React, { useState, useEffect } from "react";
import Display from "./display";
import { listAll } from "Api/blogs";

export const Blog = ({ ...props }) => {
  const [postList, setPostList] = useState([]);

  // chama a API para listar os posts (#index)
  useEffect(() => {
    listAll()
      .then((response) => {
        setPostList(response.data);
      })
      .catch(err => console.err("get post error", err))

  }, []);

  return <Display {...{ postList }} />;
};

export default Blog;
