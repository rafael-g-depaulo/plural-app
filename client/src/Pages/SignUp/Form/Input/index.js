import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 20px 30px;
  font-family: Town80Text;
  font-size: 24.5px;
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

  &:focus {
    outline: none;
  }
`;

export const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;
