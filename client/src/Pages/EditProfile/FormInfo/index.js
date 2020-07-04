import React, { useState, useCallback } from "react";

import Display from "./Display";
import PopUp from "Components/PopUp";

import { updateUser as patchUser } from "Api/User";
import { useHistory } from "react-router-dom";

export const Form = ({ currentUser, ...props }) => {
  const history = useHistory();

  // user and error objects
  const [user, setUser] = useState({
    name: currentUser.name,
    city: currentUser.city,
    day: currentUser.birthdate.substr(8, 2),
    month: `${currentUser.birthdate.substr(5, 2) - 1}`,
    year: currentUser.birthdate.substr(0, 4),
    phone_number: currentUser.phoneNumber,
  });
  const [errors, setErrors] = useState({});

  // error popup status
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null);

  // given input, checks errors
  const getError = useCallback((key, value, user) => {
    switch (key) {
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
      const inputs = ["name", "city", "day", "month", "year", "phone_number"];

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
          birthdate: `${user.year}-${parseInt(user.month) + 1}-${user.day}`,
          phoneNumber: user.phone_number,
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

      patchUser(validateUser(user))
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
          updateUserFormattedInput,
        }}
        {...props}
      />
      <PopUp open={open} {...getPopUpMessage(status)} />
    </>
  );
};

export default Form;
