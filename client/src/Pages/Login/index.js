import React, { useState, useCallback, useContext } from "react";
import PopUp from "../../Components/PopUp";

import Display from "./Display";

import { loginUser } from "Api/User";

import UserContext from "Context/User";

export const Login = ({ ...props }) => {

  const userContext = useContext(UserContext);

  // handle input
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const onChangePwd = useCallback((e) => {
    setPwd(e.target.value);
  }, []);
  
  // error box status
  const [open, setOpen] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null)

  // submit login form
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      loginUser({ email, password: pwd })
        .then((res) => {
          userContext.setCurrentUser(res.data.currentUser)
        })
        .catch((err) => {
          // set the PopUp state as true so it shows on the screen
          setErrorStatus(err.response?.status ?? 500)
          setOpen(true);
        });
      // if the user tries again it shows the same  error message
      setOpen(false);
    },
    [email, pwd, userContext]
  );

  const getErrorMsg = useCallback(status => 
    status === 401 ? { title: "Email e/ou senha inválidos", message: "Por favor tente de novo" } :
    status === 500 ? { title: "Erro de conexão", message: "Por favor tente de novo" } :
    { title: "Erro", message: "Houve um erro. Tente de novo mais tarde" }  
  , [])

  return (
    <>
      <Display
        {...{
          onSubmit,
          email,
          onChangeEmail,
          pwd,
          onChangePwd,
        }}
        {...props}
      />  
      <PopUp open={open} {...getErrorMsg(errorStatus)} />
    </>
  )
};

export default Login;
