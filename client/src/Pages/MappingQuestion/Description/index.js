import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  width: 364px;
  height: 317px;
  font-family: sans-serif;
  font-size: 50.5px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.80;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
  position: absolute;
  text-transform: uppercase;
`;

export const Description = ({ ...props }) => {
  return (
    <>
      <Text>
        gostaria de participar do nosso mapeamento cultural do distrito federal?
      </Text>
    </>
  );
};

export default Description;
