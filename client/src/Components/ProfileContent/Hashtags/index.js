import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;

  @media (min-width: 500px) {
    padding-bottom: 50px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Text = styled.span`
  margin: 0 5px;
  font-family: Town Text;
  white-space: nowrap;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.3;
  letter-spacing: 5.52px;
  text-transform: uppercase;
  text-align: left;
  color: #ffffff;
`;

export const Hashtags = ({ items, ...props }) => {
  return (
    <Container>
      <ItemContainer>
        {items.map((item, index) => (
          <Text key={index}>#{item}</Text>
        ))}
      </ItemContainer>
    </Container>
  );
};

export default Hashtags;
