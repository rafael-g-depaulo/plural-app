import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import SubmitButton from "./SubmitButton";
import { passwordResetCallback } from "../../../api";

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

const Text = styled.h3`
  color: white;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const NewPasswordForm = ({ ...props }) => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    let errorsObj = { ...errors };

    if (password === passwordConfirmation) {
      errorsObj.invalidPassword = null;

      passwordResetCallback(password, props.token)
        .then((res) => setSuccess(true))
        .catch((err) => {
          if (err.response.status === 401) {
            let errorsObj = { ...errors };

            errorsObj.invalidToken = true;

            setErrors(errorsObj);
          }
        });
    } else {
      errorsObj.invalidPassword = true;

      setErrors(errorsObj);
    }
  }

  function FormContent() {
    if (success) {
      return <Text>Sua senha foi atualizada com sucesso!</Text>;
    } else if (errors.invalidToken) {
      return (
        <Text>
          Foi utilizado um link inválido ou expirado. Tente novamente.
        </Text>
      );
    } else {
      return (
        <>
          <Group>
            <InputLabel htmlFor="email">Insira sua nova senha</InputLabel>
            <Input
              id="new-password"
              name="new-password"
              type="password"
              onInput={(e) => setPassword(e.target.value)}
            />

            <br />

            <InputLabel htmlFor="email">Confirme a senha</InputLabel>
            <Input
              id="password-confirmation"
              name="password-confirmation"
              type="password"
              onInput={(e) => setPasswordConfirmation(e.target.value)}
            />
            {errors.invalidPassword && (
              <InputError>As senhas não correspondem</InputError>
            )}
          </Group>

          <SubmitButton text="Alterar senha" />
        </>
      );
    }
  }

  return (
    <Form onSubmit={onSubmit} autocomplete="off">
      <Title>ALTERAÇÃO DE SENHA</Title>

      {FormContent()}
    </Form>
  );
};

export default NewPasswordForm;
