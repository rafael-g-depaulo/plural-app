import React from "react";
import Display from "./Display";
import { useState } from "react";
import { useCallback } from "react";

import api from "../../services/api";

api.get("/login");

export const Login = ({ ...props }) => {
  // handle input
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const onChangePwd = useCallback((e) => {
    setPwd(e.target.value);
  }, []);

  // submit login form
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email, pwd);
      // call API to log in
    },
    [email, pwd]
  );

  // favebook/google auths
  const facebookLogin = useCallback((e) => {
    // call API to log in
  }, []);
  const googleLogin = useCallback((e) => {
    // call API to log in
  }, []);

  return (
    <Display
      {...{
        onSubmit,
        email,
        onChangeEmail,
        pwd,
        onChangePwd,
        facebookLogin,
        googleLogin,
      }}
      {...props}
    />
  );
};

export default Login;
