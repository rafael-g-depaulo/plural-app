import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url(${(props) => props.image});
  background-color: ${(props) => props.color};
  background-size: cover;
  background-position: center;
  width: 137.5px;
  height: 137.5px;
  margin-left: 22px;
  border-radius: 50%;
  margin-top: 23px;

  @media (min-width: 700px) {
    width: 275px;
    height: 275px;
    margin-left: 24px;
    margin-top: 34.1px;
  }
`;

export const BannerImage = ({ image, ...props }) => {
  // se não existir uma imagem, o background é preto
  let $banner_image = <Container color="#000"></Container>;
  if (image != null) {
    return <Container image={image}></Container>;
  }
  return $banner_image;
};

export default BannerImage;
