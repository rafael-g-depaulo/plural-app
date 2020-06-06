import React from "react";
import styled from "styled-components";
import Description from "./Description";

const Background = styled.div`
    background-color: #c0c0c0;
    width: 100vw;
    height: 100vh;
`;

export const MappingQuestion = ({ ...props }) => {
  return (
    <>
      <Background>
          <Description />
      </Background>
    </>
  );
};

export default MappingQuestion;
