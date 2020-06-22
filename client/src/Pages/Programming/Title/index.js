import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 338px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -26px;
  @media (min-width: 700px) {
    width: 676px;
    margin-bottom: -36px;
  }
`;

const Text = styled.p`
  font-family: "Town Text";
  font-size: 23.5px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  text-align: justify;
  text-transform: uppercase;
  color: #f26522;
  @media (min-width: 700px) {
    font-size: 47px;
  }
`;

export const Title = ({ ...props }) => {
  return (
    <Container>
      <Text>p</Text>
      <Text>r</Text>
      <Text>o</Text>
      <Text>g</Text>
      <Text>r</Text>
      <Text>a</Text>
      <Text>m</Text>
      <Text>a</Text>
      <Text>ç</Text>
      <Text>ã</Text>
      <Text>o</Text>
    </Container>
  );
};

export default Title;
