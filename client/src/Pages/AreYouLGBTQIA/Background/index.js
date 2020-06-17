import React from "react";
import styled from "styled-components";
import AreYou_web from "./vc_eh_site_fundo.png";
import AreYou_app from "./voce_eh_fundo.png";

const Container = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;

  @media (max-width: 699px) {
    background-image: url(${AreYou_app});
  }

  @media (min-width: 700px) {
    background-image: url(${AreYou_web});
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
