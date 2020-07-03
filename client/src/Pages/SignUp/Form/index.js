import React, { useState, useCallback } from "react";

import Display from "./Display";
import PopUp from "Components/PopUp";

import { registerUser } from "Api/User";
import { useHistory } from "react-router-dom";

export const Form = ({ ...props }) => {
  const history = useHistory();

  // user and error objects
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);

  // error popup status
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null);

  // given input, checks errors
  const getError = useCallback((key, value, user) => {
    switch (key) {
      case "email":
        const validEmailRegex = RegExp(
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        );

        // checks if email is valid and if matches email_confirm
        return {
          [key]: validEmailRegex.test(value) ? "" : "Email inválido",
          email_confirm:
            value === user.email_confirm
              ? ""
              : "Os endereços de e-mail não correspondem",
        };

      case "email_confirm":
        // checks if matches email
        return {
          [key]:
            value === user.email
              ? ""
              : "Os endereços de e-mail não correspondem",
        };

      case "password":
        // checks password length and if matches password_confirm
        return {
          [key]:
            value.length < 8 ? "Senha tem que ter ao menos 8 caracteres" : "",
          password_confirm:
            value === user.password_confirm ? "" : "As senhas não correspondem",
        };

      case "password_confirm":
        // checks if matches password
        return {
          [key]: value === user.password ? "" : "As senhas não correspondem",
        };

      case "name":
        // checks if value is present
        return {
          [key]: value ? "" : "Campo não pode estar em branco",
        };

      case "city":
        // checks if value is present
        return {
          [key]: value ? "" : "Campo não pode estar em branco",
        };

      case "day":
        // checks if day is valid
        let day = parseInt(value);
        return { [key]: day >= 1 && day <= 31 ? "" : "Dia inválido" };

      case "month":
        // checks if value is present
        return {
          [key]: value ? "" : "Mês não pode estar em branco",
        };

      case "year":
        // checks if year is valid
        let year = parseInt(value);
        return {
          [key]: year >= 1900 && year <= 2020 ? "" : "Ano inválido",
        };

      case "phone_number":
        // checks phone_number length
        let stripped = value.replace(/\D/g, ""); // removes non-numeric chars (e.g. (), _ and - )
        return {
          [key]: stripped.length < 11 ? "Número incompleto" : "",
        };

      default:
        return {
          [key]: "",
        };
    }
  }, []);

  // update user on input change
  const updateUser = useCallback(
    (e) => {
      const { name, value } = e.target;

      setErrors({
        ...errors,
        ...getError(name, value, user),
      });

      setUser({
        ...user,
        [name]: value,
      });
    },
    [user, errors, getError]
  );

  // for react-number-format, cant use event
  const updateUserFormattedInput = useCallback(
    (key, value) => {
      setErrors({
        ...errors,
        ...getError(key, value, user),
      });

      setUser({
        ...user,
        [key]: value,
      });
    },
    [user, errors, getError]
  );

  // check inputs before submit
  const checkInputs = useCallback(
    (user) => {
      const inputs = [
        "email",
        "email_confirm",
        "password",
        "password_confirm",
        "name",
        "city",
        "day",
        "month",
        "year",
        "phone_number",
      ];

      // filter out "" on errors obj (as those are not errors)
      // gets inputs that already have errors
      const hasError = Object.keys(errors).filter(
        (name) => errors[name] !== ""
      );

      const newErrors = inputs.reduce((acc, inputName) => {
        // skip over inputs already with errors
        if (!hasError.includes(inputName)) {
          let inputValue = user[inputName] ? user[inputName] : "";

          return { ...acc, ...getError(inputName, inputValue, user) };
        } else {
          return acc;
        }
      }, {});

      return newErrors;
    },
    [errors, getError]
  );

  const countErrors = useCallback((oldErrors, newErrors) => {
    // using this because setErrors is async
    // sets phone_number to be ignored
    const combined = { ...oldErrors, ...newErrors, phone_number: "" };

    // filter out "" as those are not errors
    return Object.values(combined).filter((v) => v !== "").length;
  }, []);

  // checks if everything is okay to send
  const validateUser = useCallback(
    (user) => {
      // checks inputs for errors
      const newErrors = checkInputs(user);

      // because setErrors is async, count errrors with errors + newErrors
      const noErrors = countErrors(errors, newErrors) === 0;

      setErrors({ ...errors, ...newErrors });

      if (noErrors && termsAccepted) {
        return {
          ...user,
          birthdate: `${user.year}-${parseInt(user.month) + 1}-${user.day}`,
          phoneNumber: user.phone_number,
        };
      } else {
        return {};
      }
    },
    [errors, termsAccepted, checkInputs, countErrors]
  );

  // submit form
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setOpen(false);

      registerUser(validateUser(user))
        .then((res) => {
          history.push("/confirmation");
        })
        .catch((err) => {
          setStatus(err.response?.status ?? 500);
          setOpen(true);
        });
    },
    [user, validateUser, history]
  );

  const getPopUpMessage = useCallback((status) => {
    switch (status) {
      case 422:
        return {
          title: "Cadastro inválido",
          message: "Por favor verifique os campos e tente novamente",
        };
      case 500:
        return {
          title: "Erro",
          message: "Por favor tente novamente",
        };
      default:
        return {
          title: "Erro",
          message: "Tente novamente mais tarde",
        };
    }
  }, []);

  return (
    <>
      <Display
        {...{
          user,
          errors,
          onSubmit,
          updateUser,
          updateUserFormattedInput,
          termsAccepted,
          setTermsAccepted,
        }}
        {...props}
      />
      <PopUp open={open} {...getPopUpMessage(status)} />
    </>
  );
};

export default Form;
