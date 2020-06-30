import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "Context/User";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: -10px;

  @media (min-width: 700px) {
    margin-bottom: -22px;
  }
`;

const Text = styled(Link)`
  font-family: "Town Text";
  font-size: 12.5px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #f26522;
  text-transform: uppercase;
  text-decoration: none;

  &:not(:last-child) {
    padding-right: 17px;
  }
  
  @media (min-width: 700px) {
    font-size: 25px;
    &:not(:last-child) {
      padding-right: 34px;
    }
  }
`;

export const Navbar = ({ ...props }) => {
  const user = useContext(UserContext)

  console.log("user", user)
  return (
    <Container>
      <Text to="/blog">blog</Text>
      <Text to="/">perfil</Text>
      <Text to="/programacao">programação</Text>
      <Text to="/participar-mapeamento">mapeamento</Text>
      <Text to="/login">sair</Text>
    </Container>
  );
};

export default Navbar;
