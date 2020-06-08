import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 60px 30px;
  color: #ffffff;
`;

export const Header = ({ ...props }) => {
  return (
    <>
      <Container>PLURAL ASSET</Container>
    </>
  );
};

export default Header;
