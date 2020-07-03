import React from "react";
import styled from "styled-components";

const Imagem = styled.img`
  background-image: url(${(props) => props.image});
  background-color: ${(props) => props.color};
  background-size: cover;
  background-position: center;
  width: 75px;
  height: 75px;
  margin: 15px 4px 0 0;

  @media (min-width: 700px) {
    width: 150px;
    height: 150px;
    margin: 30px 8px 0 0;
  }
`;

export const image = ({ image }) => {
  let $banner_image = <Imagem color="#000"></Imagem>;
  if (image != null) {
    return <Imagem image={image}></Imagem>;
  }
  return $banner_image;
};

export default image;
