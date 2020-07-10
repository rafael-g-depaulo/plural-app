import React from "react";
import styled from "styled-components";
import JobInputs from "../../../Components/JobsInput";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 305px;
  margin: 30px 31.5px;

  @media(min-width: 700px) {
    width: 610px;
    margin: 30px 0 40px 0;
  }
`;

const SearchInput = styled.div`
  width: 197.5px;

  @media(min-width: 700px) {
    width: 395px;
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
  
  &:hover {
    background-color: #222222;
    border: solid 1px #fffdfd;
  }

  &:active {
    outline: none;
    background-color: #303030;
    border: solid 1px #fffdfd;
  }

  &:focus {
    outline: none;
    border: solid 2px #fffdfd;
  }

  @media(min-width: 700px) {
    width: 193px;
    height: 41px;
    font-size: 25px;
    border: solid 2px #fffdfd;
  }
`;

export const SearchBar = ({ onJobsChange, onClick, ...props }) => {
  return (
    <Container>
      <SearchInput>
        <JobInputs onJobsChange={onJobsChange} />
      </SearchInput>
      <ButtonSearch onClick={onClick}>pesquisar</ButtonSearch>
    </Container>
  );
};

export default SearchBar;
