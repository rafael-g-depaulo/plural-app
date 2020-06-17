import React from "react";
import Background from "./Background";
import Header from "./Header";
import Form from "./Form";
import Footer from "Components/ComputerAsset";

export const SignUp = ({ ...props }) => {
  return (
    <Background>
      <Header />
      <Form />
      <Footer />
    </Background>
  );
};

export default SignUp;
