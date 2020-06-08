import React from "react";
import styled from "styled-components";

const Label = styled.label`
  padding: 0 30px 10px;
  font-family: Town80Text;
  font-size: 24.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
`;

export const InputLabel = ({ ...props }) => {
  return <Label {...props}>{props.children}</Label>;
};

export default InputLabel;
