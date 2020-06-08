import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
`;

export const Footer = ({ ...props }) => {
  return (
    <>
      <Container>COMPUTER ASSET</Container>
    </>
  );
};

export default Footer;
