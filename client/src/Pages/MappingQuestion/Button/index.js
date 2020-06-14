import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  @media (max-width: 599px) {
    width: 55vw;
    height: 6vh;
    margin: 69vh 29.1vw 25.1vh 15.9vw;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    width: 41vw;
    height: 7vh;
    margin: 73.1vh 25.1vw 19.9vh 23.9vw;
  }

  @media (min-width: 1024px) {
    width: 25.5vw;
    height: 7.3vh;
    margin: 76.1vh 39.3vw 16.6vh 35.2vw;
  }

  @media (max-height: 650px) {
    width: 23vw;
    margin: 84vh 41.8vw 14.5vh 35.2vw;
  }
`;

const ButtonBox = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 30px;
  font-family: Town Text;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  @media (max-width: 599px) {
    width: 22vw;
    height: 6vh;
    border: 1px #fffdfd solid;
    font-size: 1.2em;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    width: 16vw;
    height: 6.2vh;
    border: 2px #fffdfd solid;
    font-size: 1.5em;
  }

  @media (min-width: 1024px) {
    width: 10vw;
    height: 7.5vh;
    border: 2px #fffdfd solid;
    font-size: 1.5em;
  }

  @media (max-height: 650px) {
    width: 8.5vw;
    height: 9vh;
  }
`;

export const Button = ({ ...props }) => {
  return (
    <>
      <Container>
        <ButtonBox to="">Sim</ButtonBox>
        <ButtonBox to="">Não</ButtonBox>
      </Container>
    </>
  );
};

export default Button;
