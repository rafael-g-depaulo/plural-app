import React, { useState, useCallback } from "react";
import Display from "./Display";

export const Form = ({ ...props }) => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  // update user on input change
  const updateUser = useCallback(
    (e) => {
      const { name, value } = e.target;

      // check errors
      let error;
      switch (name) {
        case "email":
          const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          );
          error = validEmailRegex.test(value) ? "" : "Email inválido";
          break;
        case "email_confirm":
          error =
            value === user.email
              ? ""
              : "Os endereços de e-mail não correspondem";
          break;
        case "password":
          error =
            value.length < 8 ? "Senha tem que ter ao menos 8 caracteres" : "";
          break;
        case "password_confirm":
          error = value === user.password ? "" : "As senhas não correspondem";
          break;
        default:
          error = "";
          break;
      }

      setErrors({
        ...errors,
        [name]: error,
      });

      setUser({
        ...user,
        [name]: value,
      });
    },
    [errors, user]
  );

  // for react-number-format, cant use event
  const updateUserFormattedInput = useCallback(
    (key, value) => {
      // check errors
      let error;
      switch (key) {
        case "day":
          let day = parseInt(value);
          error = day < 0 || day > 31 ? "Dia inválido" : "";
          break;
        case "year":
          let year = parseInt(value);
          error = year < 1900 || year > 2020 ? "Ano inválido" : "";
          break;
        default:
          error = "";
          break;
      }

      setErrors({
        ...errors,
        [key]: error,
      });

      setUser({
        ...user,
        [key]: value,
      });
    },
    [errors, user]
  );

  // submit form
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      console.log(user);
    },
    [user]
  );

  return (
    <Display
      {...{
        user,
        errors,
        onSubmit,
        updateUser,
        updateUserFormattedInput,
      }}
      {...props}
    />
  );
};

export default Form;
