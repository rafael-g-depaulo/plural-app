import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;

  @media (max-width: 599px) {
    width: 64.3vw;
    height: 13.6vh;
    margin: 34.5vh 19.7vw 52.9vh 16vw;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    width: 40vw;
    height: 17vh;
    margin: 32vh 36vw 51vh 24vw;
  }

  @media (min-width: 1024px) {
    width: 28.3vw;
    height: 21.2vh;
    margin: 32vh 36.6vw 50.8vh 35.2vw;
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
    font-size: 3.6em;
  }

  @media (min-width: 1024px) {
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
