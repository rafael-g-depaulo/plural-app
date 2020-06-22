import React, { useState, useEffect } from "react";
import Display from "./display";
import { listAll } from "Api/blogs";

export const Blog = ({ ...props }) => {
  const [postList, setPostList] = useState([]);

  // chama a API para listar os posts (#index)
  const getPosts = async() => {
    await listAll().then((response) => {
      setPostList(response.data);
    });
  }

  useEffect(() => {
   getPosts()
  }, []);

  return <Display {...{ postList }} />;
};

export default Blog;
