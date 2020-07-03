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

const Name = styled.span`
  padding-bottom: 10px;
  font-family: Town Display;
  font-size: 36px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
`;

const City = styled.span`
  font-family: Town Text;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
`;

export const Title = ({ name, city, ...props }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <City>{city}</City>
    </Container>
  );
};

export default Title;
