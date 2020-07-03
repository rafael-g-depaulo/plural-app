import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import UserContext from "Context/User";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: ${props => props.leftAlign ? "flex-start" : "center"};
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

  // find if the user is logged in
  const user = useContext(UserContext)
  const isLogged = user !== null

  // get current path to return here if the user logs in
  const { pathname } = useLocation()
  const returnTo = pathname.replace("/", "")

  return (
    <Container leftAlign={!isLogged}>
      <Text to="/blog">blog</Text>
      { isLogged && <Text to="/me">perfil</Text> }
      <Text to="/event">programação</Text>
      { isLogged && <Text to="/participar-mapeamento">mapeamento</Text> }
      <Text to={"/login" + (isLogged ? "" : `?redirectTo=${returnTo}`)}>{ isLogged ? "sair" : "entrar" }</Text>
    </Container>
  );
};

export default Navbar;
