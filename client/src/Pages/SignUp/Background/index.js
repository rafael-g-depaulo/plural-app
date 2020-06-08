import React from "react";
import styled from "styled-components";

import bg_site from "./sitecadastro_fundo.png";
import bg_app from "./appcadastro_fundo.png";

const BackgroundImage = styled.div`
  background-image: url(${bg_app});
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  background-size: cover;
  min-height: 100vh;

  @media (min-width: 1024px) {
    background-image: url(${bg_site});
  }
`;

const Container = styled.div`
  max-width: 590px;
  margin: 0 80px;

  @media (min-width: 768px) {
    max-width: 450px;
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
