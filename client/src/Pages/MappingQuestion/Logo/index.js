import React from "react";
import styled from "styled-components";
import PluralLogo from "../../../Components/Logo/plural_logo.png";

const Container = styled.img`
  position: absolute;

  @media (max-width: 599px) {
    width: 36.3vw;
    height: 6.2vh;
    margin: 16.7vh 47.7vw 77.1vh 16vw;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    width: 35vw;
    height: 7.5vh;
    margin: 18vh 41vw 74.5vh 24vw;
  }

  @media (min-width: 1024px) {
    width: 17.5vw;
    height: 8.6vh;
    margin: 13.6vh 47.3vw 77.8vh 35.2vw;
  }

  @media (max-height: 650px) {
    height: 11vh;
    margin: 9.6vh 47.3vw 79.4vh 35.2vw;
  }
`;

export const Logo = ({ ...props }) => {
  return (
    <>
      <Container src={PluralLogo} alt="logo" />
    </>
  );
};

export default Logo;
