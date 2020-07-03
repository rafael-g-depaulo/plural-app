import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 25px;

  @media (min-width: 500px) {
    padding-bottom: 50px;
  }
`;

const Text = styled.span`
  margin: 0 5px;
  font-family: Town Text;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-transform: uppercase;
  text-align: justify;
  color: #ffffff;
`;

export const About = ({ content, ...props }) => {
  return (
    <Container>
      <Text>{content}</Text>
    </Container>
  );
};

export default About;
