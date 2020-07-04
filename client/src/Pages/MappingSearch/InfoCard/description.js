import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 205.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 0 20px 12px;

  @media (min-width: 700px) {
    width: 410px;
    margin: 0 0 40px 24px;
  }
`;

const Title = styled.h1`
  width: 208px;
  font-family: "Town Text";
  font-size: 19px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: -5px;

  @media (min-width: 700px) {
    width: 416px;
    font-size: 38px;
    margin-bottom: -10px;
  }
`;

const Category = styled.p`
  width: 208px;
  max-height: 54px;
  font-family: "Town Text";
  font-size: 10.5px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.82;
  letter-spacing: normal;
  text-align: justify;
  color: #f26522;
  text-transform: uppercase;
  margin-bottom: -5px;

  @media (min-width: 700px) {
    width: 416px;
    max-height: 108px;
    font-size: 21px;
    margin-bottom: -10px;
  }
`;

const Hashtags = styled.p`
  max-width: 153px;
  max-height: 75px;
  font-family: "Town Text";
  font-size: 12.5px;
  font-weight: 500;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.72;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;

  @media (min-width: 700px) {
    max-width: 306px;
    max-height: 150px;
    font-size: 25px;
  }
`;

export const description = ({ name, category, hashtags }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <Category>
        {category.map((item) => {
          if (item === category[category.length - 1]) {
            return <span key={item}>{item}</span>;
          } else {
            return <span key={item}>{item} - </span>;
          }
        })}
      </Category>
      <Hashtags>
        {hashtags.map((item) => {
          if (item === hashtags[hashtags.length - 1]) {
            return <span key={item}>#{item}</span>;
          } else {
            return <span key={item}>#{item} </span>;
          }
        })}
      </Hashtags>
    </Container>
  );
};

export default description;
