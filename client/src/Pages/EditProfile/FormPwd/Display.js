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
  padding: 0 100px 30px 20px;
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
    padding: 0 100px 30px 30px;
    font-size: 24.5px;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const Display = ({ user, errors, onSubmit, updateUser, ...props }) => {
  return (
    <Form onSubmit={onSubmit} autocomplete="off">
      <Title>ALTERAR SENHA</Title>

      <Group>
        <InputLabel htmlFor="password">Crie uma nova senha</InputLabel>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          onChange={updateUser}
        />
        {errors.password && <InputError>{errors.password}</InputError>}
      </Group>

      <Group>
        <InputLabel htmlFor="password-confirm">Confirme a sua senha</InputLabel>
        <Input
          id="password-confirm"
          name="password_confirm"
          type="password"
          autoComplete="new-password"
          onChange={updateUser}
        />
        {errors.password_confirm && (
          <InputError>{errors.password_confirm}</InputError>
        )}
      </Group>

      <SubmitButton />
    </Form>
  );
};

export default Display;
