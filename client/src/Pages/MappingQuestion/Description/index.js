import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  width: 9.1em;
  height: 8.4em;
  font-family: Town80Text;
  font-size: 2.6em;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.91;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
  position: absolute;
  text-transform: uppercase;
  margin: 31.625vh 36.4vw 28.75vh 35.15vw;

  @media (max-width: 550px) {
    font-size: 2em;
    margin: 33.26vh 16.14vw 38.15vh 24.8vw;
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
