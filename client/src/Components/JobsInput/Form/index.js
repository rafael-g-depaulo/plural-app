import React, { useState, useCallback } from "react";
import Display from "./Display";

export const Form = ({ ...props }) => {
  const [user, setUser] = useState({});

  const updateUser = useCallback(
    (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    },
    [user]
  );

  return <Display updateUser={updateUser} />;
};

export default Form;
