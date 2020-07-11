import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 599px) {
    width: 37.4vw;
    height: 17.4vh;
    margin-top: 61.5vh;
    margin-left: 31.3vw;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    width: 29vw;
    height: 19vh;
    margin-top: 59vh;
    margin-left: 35.5vw;
  }

  @media (min-width: 1024px) {
    width: 16vw;
    height: 23vh;
    margin-top: 62.6vh;
    margin-left: 42vw;
  }

  @media (min-width: 1300px) and (min-height: 700px) {
    width: 18vw;
    height: 23vh;
    margin-top: 62.2vh;
    margin-left: 41vw;
  }
`;

const ButtonBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.cover ? "#6739d1" : "#f58880"};
  text-decoration: none;
  font-family: Town Text;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  border-radius: 5rem;
  width: 100%;

  &:focus {
    outline: none;
    background-color: ${props => props.cover ? "#5a1ee5" : "#f3756c"};
  }

  &:hover {
    background-color: ${props => props.cover ? "#5a1ee5" : "#f3756c"};
  }

  &:active {
    background-color: ${props => props.cover ? "#471cad" : "#ed5e54"};
  }

  @media (max-width: 599px) {
    height: 5.8vh;
    font-size: 1.2em;
    border: solid 1px #fffdfd;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    height: 6.1vh;
    font-size: 1.5em;
    border: solid 2px #fffdfd;  
  }

  @media (min-width: 1024px) {
    height: 7.5vh;
    font-size: 1.7em;
    border: solid 2px #fffdfd;
  }

  @media (min-width: 1300px) and (min-height: 700px) {
    height: 7.8vh;
    font-size: 1.7em;
    border: solid 2px #fffdfd;
  }
`;

export const Buttons = ({ ...props }) => {
  return (
    <>
      <Container>
        <ButtonBox cover onClick={() => props.onClickCallback(true)} >
          sim
        </ButtonBox>
        <ButtonBox onClick={() => props.onClickCallback(false)} >
          não
        </ButtonBox>
      </Container>
    </>
  );
};

export default Buttons;
