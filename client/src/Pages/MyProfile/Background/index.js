import React from "react";
import styled from "styled-components";

import bg_site from "./site_fundo.png";
import bg_app from "./app_fundo.png";

const BackgroundImage = styled.div`
  background-image: url(${bg_app});
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  background-size: cover;
  min-height: 100vh;
  min-width: fit-content;

  @media (min-width: 500px) {
    background-image: url(${bg_site});
  }
`;

const Container = styled.div`
  margin: 0 8%;

  @media (min-width: 900px) {
    max-width: 750px;
    margin: 0 auto;
  }
`;

export const Background = ({ ...props }) => {
  return (
    <BackgroundImage>
      <Container>{props.children}</Container>
    </BackgroundImage>
  );
};

export default Background;
