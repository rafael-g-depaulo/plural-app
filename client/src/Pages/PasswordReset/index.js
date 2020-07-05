import React from "react";
import { withRouter } from "react-router-dom";

import Background from "./Background";
import Header from "./Header";
import Form from "./Form";
import NewPasswordForm from "./Form/NewPassword";

import Footer from "Components/ComputerAsset";

export const PasswordReset = ({ ...props }) => {
  return (<>
    <Background>
      <Header />
      {props.match.params.token === undefined ? (
        <Form />
      ) : (
        <NewPasswordForm token={props.match.params.token} />
      )}
      <Footer />
    </Background>
  </>);
};

export default withRouter(PasswordReset);
