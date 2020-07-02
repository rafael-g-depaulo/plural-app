import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 205.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 14px 28px 20px 14px;
`;

const Title = styled.h1`
  max-width: 205.5px;
  font-family: "Town Text";
  font-size: 19px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  text-transform: uppercase;
  color: #000;
  opacity: 1;
`;

export const description = ({ ...props }) => {
  return (
    <Container>
      <Title>madamy</Title>
    </Container>
  );
};

export default description;
