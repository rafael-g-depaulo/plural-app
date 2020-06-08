import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 30px;
  padding-bottom: 48px;
  padding-right: 30px;
  padding-top: 20px;

  @media (min-width: 768px) {
    padding-right: 42px;
  }
`;

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-family: Town80Text;
  font-size: 24.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  user-select: none;
  color: #ffffff;
`;

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
    background-color: #333333;
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

export const TermsConditions = ({ ...props }) => {
  return (
    <Container>
      <Label>
        <Input />
        <StyledCheckbox />
        Eu concordo com os <b>Termos e Condições</b> e com a{" "}
        <b>Política de Privacidade</b> do Plural
      </Label>
    </Container>
  );
};

export default TermsConditions;
