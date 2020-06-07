import React from "react";
import styled from "styled-components";
import GostariadeParticipar from "./gostariadeparticipar_site_fundo.png"
import Description from "./Description";

const Background = styled.div`
    background-image: url(${GostariadeParticipar});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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
