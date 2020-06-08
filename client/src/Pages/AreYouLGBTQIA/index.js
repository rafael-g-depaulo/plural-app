import React from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import Question from "./Question";
import AreYou_web from "./vc_eh_site_fundo.png";
import AreYou_app from "./voce_eh_fundo.png";

const Background = styled.div`
background-image: url(${AreYou_app});
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;

  @media (min-width: 900px) {
    background-image: url(${AreYou_web});
  }
`;

export const AreYou = ({ ...props }) => {
  return (
    <>
      <Background>
        <Question />
        <Buttons />
      </Background>
    </>
  );
};

export default AreYou;
