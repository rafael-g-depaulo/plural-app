import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 30px;
  padding-bottom: 48px;
  padding-right: 30px;
  padding-top: 20px;

  @media (min-width: 500px) {
    padding-right: 42px;
  }
`;

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-family: Town Text;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  user-select: none;
  color: #ffffff;

  @media (min-width: 500px) {
    font-size: 24.5px;
  }
`;

//Custom checkbox
const Input = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const StyledCheckbox = styled.span`
  position: absolute;
  top: 5px;
  left: 0;
  height: 20px;
  width: 20px;
  color: #ffffff;
  background-color: #000000;
  border: 2px solid #ffffff;
  border-radius: 50%;

  ${Label}:hover & {
    background-color: #222222;
  }

  //Checked dot
  ${Input}:checked + & {
    &:after {
      display: block;
      content: "";
      position: absolute;
      left: 3px;
      top: 3px;
      width: 10px;
      height: 10px;
      background-color: #ffffff;
      border-radius: 50%;
    }
  }
`;

const MyLink = styled.a`
  color: #f26522;
  text-decoration: none;

  &:hover, &:active {
    color: #ebce8b;
  }
`

export const TermsConditions = ({ ...props }) => {
  return (
    <Container>
      <Label>
        <Input />
        <StyledCheckbox />
        Eu concordo com os <b><MyLink href="https://www.google.com" target="_blanc" rel="noopener noreferrer">Termos e Condições</MyLink></b> e com a{" "}
        <b><MyLink href="https://www.google.com" target="_blanc" rel="noopener noreferrer">Política de Privacidade</MyLink></b> do Plural
      </Label>
    </Container>
  );
};

export default TermsConditions;
