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

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Text = styled.span`
  font-family: Town Display;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f26522;
`;

const Divisor = styled.div`
  height: 2px;
  width: 10px;
  align-self: center;
  justify-self: center;
  background-color: #f26522;
  margin: 0 5px;

  &:last-child {
    display: none;
  }
`;

export const Areas = ({ items, ...props }) => {
  return (
    <Container>
      <ItemContainer>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Text>{item}</Text>
            <Divisor />
          </React.Fragment>
        ))}
      </ItemContainer>
    </Container>
  );
};

export default Areas;
