import React from "react";
import styled from "styled-components";
import { labelFontSize } from "Themes/default";

const Label = styled.label`
  padding: 0 20px 10px;
  font-family: Town Text;
  font-size: ${labelFontSize}px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;

  @media (min-width: 500px) {
    padding: 0 30px 10px;
  }
`;

export const InputLabel = ({ ...props }) => {
  return <Label {...props}>{props.children}</Label>;
};

export default InputLabel;
