import React from "react";
import styled from "styled-components";
import { buttonFontSize } from "Themes/default";

const StyledInput = styled.input.attrs({ type: "submit" })`
  padding: 15px 0;
  font-family: Town Display;
  font-size: ${buttonFontSize}px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ebce8b;
  background: #000000;
  border: 2px solid #ffffff;
  border-radius: 50px;

  &:hover {
    background-color: #222222;
  }

  &:active, &:focus {
    outline: none;
    background-color: #303030;
  }
`;

export const Input = ({ ...props }) => {
  return <StyledInput value="FINALIZAR CADASTRO" />;
};

export default Input;
