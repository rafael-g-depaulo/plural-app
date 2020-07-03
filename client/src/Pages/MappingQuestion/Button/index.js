import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  @media (max-width: 599px) {
    width: 52vw;
    height: 6vh;
    margin-top: 69vh;
    margin-left: 15.9vw;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    width: 41vw;
    height: 7vh;
    margin-top: 73.1vh;
    margin-left: 23.9vw;
  }

  @media (min-width: 1024px) {
    width: 22vw;
    height: 7.3vh;
    margin-top: 78.1vh;
    margin-left: 35.2vw;

    @media (max-height: 650px) {
      margin-top: 84.1vh;
    }
  }
`;

const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5rem;
  font-family: Town Text;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 599px) {
    width: 20vw;
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
    width: 8.7vw;
    height: 100%;
    border: 2px #fffdfd solid;
    font-size: 1.6em;
  }
`;

export const Button = ({ ...props }) => {
  return (
    <>
      <Container>
        <ButtonBox onClick={() => props.onClickCallback(true)}>Sim</ButtonBox>
        <ButtonBox onClick={() => props.onClickCallback(false)}>Não</ButtonBox>
      </Container>
    </>
  );
};

export default Button;
