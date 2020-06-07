import React from "react";
import styled from "styled-components";
import GostariadeParticipar from "./gostariadeparticipar_site_fundo.png";
import GostariadeParticipar_App from "./gostariadeparticipar_fundo.png";
import Description from "./Description";
import Button from "./Button";

const Background = styled.div`
  background-image: url(${GostariadeParticipar_App});
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;

  @media (min-width: 1024px) {
    background-image: url(${GostariadeParticipar});
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MappingQuestion = ({ ...props }) => {
  return (
    <>
      <Background>
        <Container>
          <Description />
          <Button />
        </Container>
      </Background>
    </>
  );
};

export default MappingQuestion;