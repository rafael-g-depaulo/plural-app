import React, { useState, useCallback } from "react";

import Display from "./Display";
import PopUp from "Components/PopUp";

import { changePassword } from "Api/User";
import { useHistory } from "react-router-dom";

export const Form = ({ ...props }) => {
  const history = useHistory();

  // user and error objects
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  // error popup status
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null);

  // given input, checks errors
  const getError = useCallback((key, value, user) => {
    switch (key) {
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

  // check inputs before submit
  const checkInputs = useCallback(
    (user) => {
      const inputs = ["password", "password_confirm"];

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

  // using this because setErrors is async
  const countErrors = useCallback((oldErrors, newErrors) => {
    const combined = { ...oldErrors, ...newErrors };

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

      if (noErrors) {
        return {
          ...user,
        };
      } else {
        return {};
      }
    },
    [errors, checkInputs, countErrors]
  );

  // submit form
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setOpen(false);

      changePassword(validateUser(user))
        .then((res) => {
          history.push("/me");
          window.location.reload();
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
        }}
        {...props}
      />
      <PopUp open={open} {...getPopUpMessage(status)} />
    </>
  );
};

export default Form;
