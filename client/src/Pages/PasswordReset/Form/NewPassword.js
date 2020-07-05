import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Input from "./Input";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import SubmitButton from "./SubmitButton";
import { passwordResetCallback } from "Api/User.js";
import { useHistory } from "react-router-dom";
import { buttonFontSize } from "Themes/default";

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

const RedirectButton = styled.button`
  padding: 15px 0;
  font-family: Town Display;
  font-size: ${buttonFontSize}px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  background: #000000;
  border: 2px solid #ffffff;
  border-radius: 50px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #222222;
  }

  &:active {
    background-color: #303030;
  }
`

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

  const history = useHistory()
  const redirect = useCallback(() => { history.push("/") }, [history])

  function FormContent() {
    if (success) {
      return (<>
        <Text>Sua senha foi atualizada com sucesso!</Text>
        <RedirectButton onClick={redirect}>Clique em mim para continuar</RedirectButton>
      </>);
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
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <InputLabel htmlFor="email">Confirme a senha</InputLabel>
            <Input
              id="password-confirmation"
              name="password-confirmation"
              type="password"
              autoComplete="new-password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
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
