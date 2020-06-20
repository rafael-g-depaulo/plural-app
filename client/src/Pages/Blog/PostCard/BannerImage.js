import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url(${(props) => props.image});
  background-color: ${(props) => props.color};
  background-size: cover;
  background-position: center;
  width: 137.5px;
  height: 137.5px;
  margin-left: 12px;
  border-radius: 50%;
  margin-top: 23px;
`;

export const BannerImage = ({ image, ...props }) => {
  let $banner_image = <Container color="#000"></Container>;
  if (image != null) {
    return <Container image={image}></Container>;
  }
  return $banner_image;
};

export default BannerImage;
