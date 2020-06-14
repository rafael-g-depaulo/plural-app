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
    width: 65vw;
    height: 28.6vh;
    font-size: 2em;
    margin: 33.3vh 18.9vw 38.1vh 16.1vw;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    width: 50vw;
    height: 50vh;
    font-size: 2.9em;
    margin: 37vh 25.9vw 19vh 24.1vw;
  }

  @media (min-width: 1024px) {
    width: 35vw;
    height: 50vh;
    font-size: 3em;
    margin: 32vh 32vw 24vh 35.2vw;
  }

  @media (max-height: 650px) {
    width: 35vw;
    height: 50vh;
    font-size: 2.8em;
    margin: 29vh 32vw 27vh 35.2vw;
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
