import React, {useContext} from "react";
import Background from "./Background";
import Header from "./Header";
import Form from "./Form";
import { createMapping } from "Api/Mapping";
import UserContext from "Context/User/";
import { useHistory } from "react-router-dom";

export const Mapping = () => {
  const userContext = useContext(UserContext);
  const history = useHistory()

  function submitMapping(data) {
    console.log(data);

    createMapping(data)
      .then((res) => {
        userContext.setCurrentUser(res.data);
        history.push("/")
      })
      .catch((err) => console.log(err));
  }

  return (
    <Background>
      <Header />
      <Form onSubmitCallback={submitMapping} />
    </Background>
  );
};

export default Mapping;
