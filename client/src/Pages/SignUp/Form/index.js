import React, { useState, useCallback, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Display from "./Display";
import { createUser, updateUser as callUpdateUser } from "Api/User.js";
import UserContext from "Context/User";

export const Form = ({ ...props }) => {
  const userContext = useContext(UserContext);

  const [user, setUser] = useState({ email: userContext.currentUser?.email });
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const location = useLocation();

  // update user on input change
  const updateUser = useCallback(
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

      const birthdate = `${user.month}/${user.day}/${user.year}`;

      const formattedUser = {
        email: user.email,
        email_confirm: user.email_confirm,
        password: user.password,
        password_confirm: user.password_confirm,
        name: user.name,
        birthdate,
        phone_number: user.phone,
        city: user.city,
      };

      if (
        user.email === user.email_confirm &&
        user.password === user.password_confirm &&
        user.name !== undefined
      ) {
        if (location.state?.userFromProvider) {
          callUpdateUser(formattedUser)
            .then((res) => {
              userContext.setCurrentUser(res.data.updatedUser);
              history.push("/");
            })
            .catch((err) => {
              alert("Ocorreu um erro ao atualizar as informações.");
            });
        } else {
          createUser(formattedUser)
            .then((res) => {
              history.push("/");
            })
            .catch((err) => {
              alert("Ocorreu um erro ao registrar.");
            });
        }
      } else {
        alert(
          "Ocorreu um erro. Verifique se o email e senha conferem, e se todos campos estão preenchidos."
        );
      }
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
