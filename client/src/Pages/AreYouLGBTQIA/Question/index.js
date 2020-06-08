import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 64.3vw;
  height: 13.6vh;
  margin: 37.5vh 19.7vw 48.9vh 16vw;

  @media (min-width: 800px) {
    width: 28.3vw;
    height: 21.2vh;
    margin: 32vh 36.6vw 50.8vh 35.2vw;
  }
`;

const Text = styled.h1`
  font-family: Town Text;
  font-size: 2.8em;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.91;
  letter-spacing: normal;
  text-transform: uppercase;
  text-align: justify;
  color: #e73839;

  span {
    color: #f58880;
  }

  @media (min-width: 800px) {
    font-size: 4em;
  }
`;

export const Question = ({ ...props }) => {
  return (
    <>
      <Container>
        <Text>
          você é <br /> <span>lgbtqia+?</span>
        </Text>
      </Container>
    </>
  );
};

export default Question;

