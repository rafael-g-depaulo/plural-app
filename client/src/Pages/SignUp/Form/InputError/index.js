import React from "react";
import styled from "styled-components";
import { labelFontSize } from "Themes/default";

const Error = styled.span`
  padding: 5px 30px;
  font-family: Town Text;
  font-size: ${labelFontSize}px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #aaaaaa;

  @media (min-width: 500px) {
    padding: 5px 30px;
  }
`;

export const InputError = ({ ...props }) => {
  return <Error {...props}>{props.children}</Error>;
};

export default InputError;
