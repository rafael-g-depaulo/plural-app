import React, { useContext } from "react";
import Background from "./Background";
import Buttons from "./Buttons";
import Logo from "./Logo";
import Question from "./Question";
import { updateUserIsLgbtq } from "Api/User";
import UserContext from "Context/User/";

export const AreYou = ({ ...props }) => {
  const userContext = useContext(UserContext);

  const updateUser = (isLgbtq) => {
    updateUserIsLgbtq({ isLgbtq })
      .then((res) => userContext.setCurrentUser(res.data.updatedUser))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Background />
      <Logo />
      <Question />
      <Buttons onClickCallback={(value) => updateUser(value)} />
    </>
  );
};

export default AreYou;
