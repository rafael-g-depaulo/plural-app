import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  position: absolute;
  font-family: Town Text;
  font-weight: 900;
  font-style: normal;
  line-height: 0.91;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
  text-transform: uppercase;

  @media (max-width: 599px) {
    font-size: 2em;
    margin-top: 33.3vh;
    margin-left: 16.1vw;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    font-size: 3em;
    margin-top: 37vh;
    margin-left: 24.1vw;
  }

  @media (min-width: 1024px) {
    font-size: 3.1em;
    margin-top: 33vh;
    margin-left: 35.2vw;

    @media (max-height: 650px) {
      font-size: 2.9em;
      margin-top: 30vh;
    }
  }

  @media (min-width: 1300px) and (min-height: 820px) {
    font-size: 3.5em;
    margin-top: 31vh;
    margin-left: 35.2vw;
  }
`;

export const Description = ({ ...props }) => {
  return (
    <>
      <Text>
        gostaria <br /> de participar <br /> do nosso <br /> mapeamento <br />{" "}
        cultural <br /> do distrito <br /> federal?
      </Text>
    </>
  );
};

export default Description;
