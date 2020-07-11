import React from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import UserContext from "Context/User";

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: ${props => props.leftAlign ? "flex-start" : "space-around"};

  ${props => (props.leftAlign || props.addMargin) && css`
    *:not(:last-child) {
      margin-right: 18px;
    }
  `}
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

  min-width: fit-content;

  &:not(:last-child) {
    /* padding-right: 17px; */
  }
  
  @media (min-width: 700px) {
    font-size: 25px;
    &:not(:last-child) {
      /* padding-right: 34px; */
    }
  }
`;

export const Navbar = ({ ...props }) => {

  // find if the user is logged in
  const { currentUser } = useContext(UserContext)
  const isLogged = !!currentUser
  const isMapped = !!currentUser?.mapping

  // get current path to return here if the user logs in
  const { pathname } = useLocation()
  const returnTo = pathname.replace("/", "")

  return (
    <Container leftAlign={!isLogged} {...props}>
      <Text to="/blog">blog</Text>
      { isMapped && <Text to="/me">perfil</Text> }
      <Text to="/event">programação</Text>
      { isLogged && <Text to="/search">busca no guia</Text> }
      <Text to={"/login" + (isLogged ? "" : `?redirectTo=${returnTo}`)}>{ isLogged ? "sair" : "entrar" }</Text>
    </Container>
  );
};

export default Navbar;
