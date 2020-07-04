import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { buttonFontSize } from "Themes/default";

const StyledLink = styled(Link)`
  padding: 15px 0;
  font-family: Town Display;
  font-size: ${buttonFontSize}px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ebce8b;
  background: #000000;
  border: 2px solid #ffffff;
  border-radius: 50px;
  text-transform: uppercase;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #222222;
  }

  &:active {
    background-color: #303030;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

export const EditButton = ({ ...props }) => {
  return (
    <Container>
      <StyledLink to="/edit-profile">Editar perfil</StyledLink>
    </Container>
  );
};

export default EditButton;
