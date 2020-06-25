import React from "react";
import Display from "./display";
import { listAll } from "Api/blogs";
import { useAPICache } from "Hooks/useAPICache";

export const Blog = ({ ...props }) => {
  const { data, status } = useAPICache(`blog_list`, [], listAll)
  
  if (status !== 200) console.log("Error in blog list page: ", status)

  return <Display postList={data} />;
};

export default Blog;
