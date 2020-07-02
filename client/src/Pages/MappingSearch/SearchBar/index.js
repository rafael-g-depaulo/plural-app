import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 305px;
  margin: 30px 31.5px;
`;

const SearchInput = styled.input`
  width: 197.5px;
  height: 20.5px;
  color: #ffffff;
  font-family: "Town Text";
  font-size: 12.5px;
  font-weight: 500;
  font-style: italic;
  line-height: normal;
  letter-spacing: normal;
  background-color: #000000;
  border-radius: 5rem;
  border: solid 1px #fffdfd;
  text-align: center;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #fff;
  }
`;

const ButtonSearch = styled.button`
  width: 96.5px;
  height: 20.5px;
  font-family: "Town Text";
  font-size: 12.5px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ebce8b;
  background-color: #000000;
  border-radius: 5rem;
  border: solid 1px #fffdfd;
  text-transform: uppercase;
  text-align: center;
  :focus {
    outline: none;
  }
`;

export const SearchBar = ({ ...props }) => {
  return (
    <Container>
      <SearchInput type="text" placeholder="está procurando por qual job?" />
      <ButtonSearch>pesquisar</ButtonSearch>
    </Container>
  );
};

export default SearchBar;
