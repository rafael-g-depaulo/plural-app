import React from "react";
import styled from "styled-components";
import PluralLogo from "../../../Components/Logo/plural_logo.png";

const Container = styled.img`
  position: absolute;
  object-fit: contain;

  @media (max-width: 599px) {
    width: 37vw;
    height: auto;
    margin-top: 16.7vh;
    margin-left: 16vw;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    width: 30vw;
    height: auto;
    margin-top: 18vh;
    margin-left: 24vw;
  }

  @media (min-width: 1024px) {
    width: 17vw;
    height: auto;
    margin-top: 13.6vh;
    margin-left: 35.2vw;

    @media (max-height: 650px) {
      width: 16vw;
      margin-top: 10.6vh;
    }
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
