import React, { useCallback } from "react";
import { useAPICache } from "Hooks/useAPICache";

import { listAll } from "Api/blog";

import PopUp from "Components/PopUp";
import Display from "./display";

export const Blog = ({ ...props }) => {
  const { data, status } = useAPICache(`blog_list`, [], listAll)

  // error handling
  const open = status !== 200
  const { title, message } =
    status === 404 ? { title: "Erro de conexão", message: "Por favor tente de novo mais tarde" } :
    status === 500 ? { title: "Erro de conexão", message: "Por favor tente de novo mais tarde" } :
    { title: "Erro", message: "Houve um erro. Tente de novo mais tarde" }

  const onClose = useCallback(() => {
  }, [])
  
  return (<>
    <Display postList={data} />
    <PopUp {...{ open, title, message, onClose }} />
  </>)
};

export default Blog;
