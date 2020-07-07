import React from "react";
import styled from "styled-components";
import GostariadeParticipar from "./gostariadeparticipar_site_fundo.png";
import GostariadeParticipar_App from "./gostariadeparticipar_fundo.png";

const Container = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;

  @media (max-width: 1023px) {
    background-image: url(${GostariadeParticipar_App});
  }
  @media (min-width: 1024px) {
    background-image: url(${GostariadeParticipar});
  }
`;

export const Background = ({ ...props }) => {
  return (
    <>
      <Container />
    </>
  );
};

export default Background;
