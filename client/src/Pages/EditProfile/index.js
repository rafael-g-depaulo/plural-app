import React, { useState, useContext } from "react";
import styled from "styled-components";
import Background from "./Background";
import Header from "./Header";
import FormInfo from "./FormInfo";
import FormPwd from "./FormPwd";
import FormMapping from "./FormMapping";
import Footer from "Components/ComputerAsset";

import UserContext from "Context/User";

const TabContainer = styled.div`
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Tab = styled.button`
  font-family: "Town Text";
  font-size: 16px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: justify;
  color: ${(props) => props.color || "#f26522"};
  background-color: rgba(0, 0, 0, 0);
  border: none;
  text-transform: uppercase;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const EditProfile = ({ ...props }) => {
  const { currentUser } = useContext(UserContext);
  const [tab, setTab] = useState("info");

  const handleTab = (tabValue) => {
    setTab(tabValue);
  };

  return (
    <Background>
      <Header />

      <TabContainer>
        <Tab onClick={() => handleTab("info")}>Editar dados</Tab>
        <Tab onClick={() => handleTab("pwd")}>Alterar senha</Tab>
        <Tab onClick={() => handleTab("mapping")}>Editar mapeamento</Tab>
      </TabContainer>

      {tab === "info" ? (
        <FormInfo currentUser={currentUser} />
      ) : tab === "pwd" ? (
        <FormPwd currentUser={currentUser} />
      ) : tab === "mapping" ? (
        <FormMapping currentUser={currentUser} />
      ) : null}

      <Footer />
    </Background>
  );
};

export default EditProfile;
