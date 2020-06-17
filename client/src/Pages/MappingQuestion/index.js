import React from "react";
import Background from "./Background";
import Button from "./Button";
import Description from "./Description";
import Logo from "./Logo";

export const MappingQuestion = ({ ...props }) => {
  return (
    <>
      <Background />
      <Logo />
      <Description />
      <Button />
    </>
  );
};

export default MappingQuestion;
