import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 599px) {
    width: 39.4vw;
    height: 17.4vh;
    margin: 61.5vh 30.3vw 21.1vh 30.3vw;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    width: 25vw;
    height: 19vh;
    margin: 62vh 37.5vw 19vh 37.5vw;
  }

  @media (min-width: 1024px) {
    width: 16.4vw;
    height: 21.1vh;
    margin: 63.6vh 41.7vw 20vh 41.9vw;
  }
`;

const ButtonBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) =>
    props.cover === true ? "#6739d1" : "#f58880"};
  text-decoration: none;
  font-family: Town Text;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;

  @media (max-width: 599px) {
    width: 37.4vw;
    height: 5.8vh;
    border-radius: 30px;
    font-size: 1.2em;
    border: solid 1px #fffdfd;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    width: 25vw;
    height: 6.1vh;
    border-radius: 30px;
    font-size: 1.5em;
    border: solid 2px #fffdfd;  
  }

  @media (min-width: 1024px) {
    width: 16.4vw;
    height: 7vh;
    border-radius: 30px;
    font-size: 1.7em;
    border: solid 2px #fffdfd;
  }
`;

export const Buttons = ({ ...props }) => {
  return (
    <>
      <Container>
        <ButtonBox to="" cover={true}>
          sim
        </ButtonBox>
        <ButtonBox to="" cover={false}>
          não
        </ButtonBox>
      </Container>
    </>
  );
};

export default Buttons;
