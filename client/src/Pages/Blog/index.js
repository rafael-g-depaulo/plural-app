import React, { useState } from "react";
import Display from "./display";
import exemplo from "./Background/perfil.jpg";

export const Blog = ({ ...props }) => {
  // exemplos 
  const [title, setTitle] = useState("Chegamos! O que é o projeto e quando.");
  const [description, setDescription] = useState(
    "Para contra atacar a pandemia lançamos uma versão on line do nosso festival!"
  );
  const [image, setImage] = useState(exemplo);

  // chamar API para gerar index dos posts

  return (
    <Display
      {...{
        title,
        description,
        image,
      }}
      {...props}
    />
  );
};

export default Blog;
