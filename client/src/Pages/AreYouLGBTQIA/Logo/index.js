import React from "react";
import styled from "styled-components";
import PluralLogo from "../../../Components/Logo/plural_logo.png";

const Container = styled.img`
  position: absolute;

  @media (max-width: 599px) {
    width: 54.8vw;
    height: 9.4vh;
    margin: 22.2vh 29.2vw 68.4vh 16vw;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    width: 35vw;
    height: 9.1vh;
    margin: 18vh 43vw 72.9vh 24vw;
  }

  @media (min-width: 1024px) {
    width: 20.6vw;
    height: 10.6vh;
    margin: 17.4vh 44.2vw 72vh 35.2vw;

    @media (min-height: 650px) {
      height: 10.1vh;
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
