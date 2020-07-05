import React from "react";
import styled from "styled-components";
import { inputFontSize } from "Themes/default";

const StyledInput = styled.input`
  padding: 15px 20px;
  font-family: Town Text;
  font-size: ${inputFontSize}px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
  background: #000000;
  border: 2px solid #ffffff;
  border-radius: 50px;

  width: ${(props) => props.width || "100%"};

  &:hover {
    background-color: #222222;
  }
  
  &:focus {
    outline: none;
    background-color: #303030;
  }


  @media (min-width: 500px) {
    padding: 15px 30px;
  }
`;

export const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;
