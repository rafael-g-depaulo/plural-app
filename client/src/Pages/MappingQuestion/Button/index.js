import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 55vw;
  height: 6vh;
  position: absolute;
  margin: 69vh 27vw 25vh 18vw;

  @media (min-width: 1024px) {
    width: 22vw;
    height: 10vh;
    margin: 81vh 45vw 30vh 33vw;
  }

  @media (min-height: 800px) {
    width: 25vw;
    margin: 76vh 42vw 30vh 33vw;
  }
`;

const ButtonBox = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 22vw;
  height: 6vh;
  border: 1px #fffdfd solid;
  border-radius: 30px;
  font-family: Town Text;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.2em;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  @media (min-width: 1024px) {
    width: 8.5vw;
    height: 9vh;
    border: 2px #fffdfd solid;
    font-size: 1.5em;
  }

  @media (min-height: 800px) {
      width: 10vw;
      height: 8vh;
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
