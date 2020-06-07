import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  position: absolute;
  width: 70vw;
  height: 50vh;
  font-family: Town Text;
  font-size: 2em;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.91;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
  text-transform: uppercase;
  margin: 34vh 12vw 16vh 18vw;

  @media (min-width: 1024px) {
    width: 35vw;
    height: 50vh;
    font-size: 2.8em;
    margin: 28vh 32vw 22vh 33vw;
  }

  @media (min-height: 800px) {
    width: 35vw;
    height: 50vh;
    font-size: 3em;
    margin: 32vh 32vw 24vh 33vw;
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
