import React, {useContext} from "react";
import Background from "./Background";
import Header from "./Header";
import Form from "./Form";
import { createMapping } from "Api/Mapping";
import UserContext from "Context/User/";

export const Mapping = () => {
  const userContext = useContext(UserContext);
  
  function submitMapping(data) {
    console.log(data);

    createMapping(data)
      .then((res) => {
        console.log(res)
        userContext.setCurrentUser(res.data);
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
