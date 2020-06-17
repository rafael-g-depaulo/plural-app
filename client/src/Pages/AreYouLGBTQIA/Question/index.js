import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;

  @media (max-width: 599px) {
    margin-top: 34.5vh;
    margin-left: 16vw;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    margin-top: 32vh;
    margin-left: 29vw;
  }

  @media (min-width: 1024px) {
    margin-top: 28vh;
    margin-left: 38.2vw;
  }

  @media (min-width: 1300px) and (min-height: 700px) {
    margin-top: 28.5vh;
    margin-left: 37.2vw;
  }
`;

const Text = styled.h1`
  font-family: Town Text;
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

  @media (max-width: 599px) {
    font-size: 2.8em;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    font-size: 4em;
  }

  @media (min-width: 1024px) {
    font-size: 4.2em;
  }

  @media (min-width: 1300px) and (min-height: 700px) {
    font-size: 4.6em;
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
