import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 192.5px;
  max-height: 140px;
  overflow: hidden;

  @media (min-width: 700px) {
    width: 385px;
    max-height: 280px;
  }
`;

const Text = styled.div`
  font-family: "Town Text";
  font-size: 12.5px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;

  @media (min-width: 700px) {
    font-size: 25px;
  }
`;

export const Description = ({ description, ...props }) => {
  return (
    <Container>
      <Text>{description}</Text>
    </Container>
  );
};

export default Description;
