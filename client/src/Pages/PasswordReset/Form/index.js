import React, { useState, useCallback } from "react";
import Display from "./Display";
import { passwordReset } from "Api/User.js";
import PopUp from "Components/PopUp";

export const Form = ({ ...props }) => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  const [allDone, setAllDone] = useState(false)

  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")

  const onClose = useCallback(() => {
    setOpen(false)
    if (allDone && process.env.NODE_ENV !== "production") {
      console.log("all done on pwd reset")
    }
  }, [allDone])

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

      if (Object.values(errors).some(err => err !== "")) {
        setTitle("Erro no formulário");
        setMessage("Confira se o email inserido está correto");
        setOpen(true)
      } else {
        passwordReset(user.email.trim())
          .then((res) => { 
            setTitle("Email enviado com sucesso")
            setMessage("Cheque o seu email para criar uma nova senha")
            setOpen(true)
            setAllDone(true)
          })
          .catch((err) => {
            if (err?.response?.status === 404) {
              setTitle("Erro");
              setMessage("Esse email não tem uma conta associada");
              setOpen(true)
            } else {
              setTitle("Erro");
              setMessage("Erro de conexão, tente de novo mais tarde");
              setOpen(true)
            }
          });
      }
    }, [user, errors]
  );

  return (<>
    <Display
      {...{
        errors,
        onSubmit,
        updateUserEmail,
      }}
      {...props}
    />
    <PopUp {...{ open, title, message, onClose }} />
  </>);
};

export default Form;
