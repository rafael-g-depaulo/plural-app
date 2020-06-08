import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 37.3vw;
  height: 17.5vh;
  margin: 62.5vh 31.3vw 20vh 31.3vw;

  @media (min-width: 700px) {
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
  width: 37.3vw;
  height: 6vh;
  border: solid 2px #fffdfd;
  border-radius: 30px;
  background-color: ${(props) =>
    props.cover === true ? "#6739d1" : "#f58880"};
  text-decoration: none;
  font-family: Town Text;
  font-size: 1.2em;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;

  @media (min-width: 700px) {
    width: 16.4vw;
    height: 7vh;
    border: solid 2px #fffdfd;
    border-radius: 30px;
    font-size: 1.7em;
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
