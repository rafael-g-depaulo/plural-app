import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-right: 12px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin: 0 0 0 10px;
`;

const ItemName = styled.p`
  max-width: 135px;
  height: auto;
  font-family: "Town Text";
  font-size: 16.5px;
  font-weight: 700;
  color: #ffffff;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  text-transform: uppercase;
  padding-left: 5px;
  margin: 0;
`;

const Item = styled.input`
  width: 12px;
  height: 12px;
  -webkit-appearance: none;
  border: solid 1px #fffefe;
  background-color: #000000;
  :hover {
    background-color: #ffffff;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
  :checked {
    ::after {
      border: solid 1px #fffefe;
      background-color: white;
      width: 12px;
      height: 12px;
    }
`;

export const Checklist = ({ ...props }) => {
  return (
    <Container>
      <ItemContainer>
        <Item type="checkbox" />
        <ItemName>Artes Cênicas</ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item type="checkbox" />
        <ItemName>comunicação</ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item type="checkbox" />
        <ItemName>dança</ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item type="checkbox" />
        <ItemName>produção & equipe técnica</ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item type="checkbox" />
        <ItemName>moda</ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item type="checkbox" />
        <ItemName>música</ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item type="checkbox" />
        <ItemName>Artes visuais</ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item type="checkbox" />
        <ItemName>cinema e fotografia</ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item type="checkbox" />
        <ItemName>apps, jogos eletrônicos e sites</ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item type="checkbox" />
        <ItemName>literatura, influencers e youtubers</ItemName>
      </ItemContainer>
    </Container>
  );
};

export default Checklist;
