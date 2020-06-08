import React from "react";
import styled from "styled-components";

const StyledInput = styled.input.attrs({ type: "submit" })`
  padding: 20px 0;
  font-family: Town10Display;
  font-size: 24.5px;
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

  &:focus {
    outline: none;
  }
`;

export const Input = ({ ...props }) => {
  return <StyledInput value="FINALIZAR CADASTRO" />;
};

export default Input;
