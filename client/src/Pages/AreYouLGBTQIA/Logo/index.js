import React from "react";
import styled from "styled-components";
import PluralLogo from "../../../Components/Logo/plural_logo.png";

const Container = styled.img`
  position: absolute;
  object-fit: contain;
  height: auto;

  @media (max-width: 599px) {
    width: 54.8vw;
    margin-top: 22.2vh;
    margin-left: 16vw;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    width: 36vw;
    margin-top: 18vh;
    margin-left: 32vw;
  }

  @media (min-width: 1024px) {
    width: 19vw;
    margin-top: 12.4vh;
    margin-left: 40.5vw;
  }

  @media (min-width: 1300px) and (min-height: 700px) {
    width: 21vw;
    margin-top: 13.4vh;
    margin-left: 39.5vw;
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
