import React, { useState, useCallback } from "react";
import Display from "./Display";
import { passwordReset } from "Api/User.js";

export const Form = ({ ...props }) => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  // update user on input change
  const updateUserEmail = useCallback(
    (e) => {
      const { name, value } = e.target;

      // check errors
      let error;
      switch (name) {
        case "email":
          /*eslint no-useless-escape: "off" */
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

  // submit form
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      passwordReset(user.email)
        .then((res) => console.log(res.data, "coloque isso num popup!!!!!!!!!!!!!!!!!"))
        .catch((err) => console.log(err));
    },
    [user]
  );

  return (
    <Display
      {...{
        errors,
        onSubmit,
        updateUserEmail,
      }}
      {...props}
    />
  );
};

export default Form;
