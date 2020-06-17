import React from "react";
import Background from "./Background";
import Buttons from "./Buttons";
import Logo from "./Logo";
import Question from "./Question";

export const AreYou = ({ ...props }) => {
  return (
    <>
      <Background />
      <Logo />
      <Question />
      <Buttons />
    </>
  );
};

export default AreYou;
