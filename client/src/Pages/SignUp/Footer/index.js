import React from "react";
import styled from "styled-components";

import computer from "./Computador.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
`;

const Img = styled.img`
  width: 100%;
`;

export const Footer = ({ ...props }) => {
  return (
    <Container>
      <Img src={computer} alt="Computador" />
    </Container>
  );
};

export default Footer;
