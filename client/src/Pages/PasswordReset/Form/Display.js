import React from "react";
import styled from "styled-components";
import Input from "./Input";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import SubmitButton from "./SubmitButton";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  @media (min-width: 500px) {
    padding-bottom: 50px;
  }
`;

const Title = styled.h2`
  margin: 0;
  padding: 0 100px 47px 20px;
  font-family: Town Display;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #f26522;

  @media (min-width: 500px) {
    padding: 0 100px 47px 30px;
    font-size: 24.5px;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const Display = ({
  errors,
  onSubmit,
  updateUserEmail,
  ...props
}) => {
  return (
    <Form onSubmit={onSubmit} autocomplete="off">
      <Title>ALTERAÇÃO DE SENHA</Title>

      <Group>
        <InputLabel htmlFor="email">Qual seu email?</InputLabel>
        <Input id="email" name="email" type="email" onInput={updateUserEmail} />
        {errors.email && <InputError>{errors.email}</InputError>}
      </Group>

      <SubmitButton text="Prosseguir com a alteração de senha"/>
    </Form>
  );
};

export default Display;
