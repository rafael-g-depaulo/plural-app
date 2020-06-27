import React from "react";
import styled from "styled-components";
import BannerImage from "./BannerImage";
import Description from "./Description";
import ProgramTitle from "./ProgramTitle";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 343px;
  max-height: auto;
  border-bottom: ${(props) => props.borderbottom};
  padding-bottom: 21.5px;
  text-decoration: none;

  @media (min-width: 700px) {
    width: 686px;
    padding-bottom: 43px;
    border-width: 2px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const EventCard = ({ id, titulo, descricao, imagem, ...props }) => {

  const event_route = `event/${id}`

  return (
    <Container borderbottom={props.borderbottom} to={event_route} >
      <TextContainer>
        <ProgramTitle title={titulo} />
        <Description description={descricao} />
      </TextContainer>
      <BannerImage image={imagem} />
    </Container>
  );
};

export default EventCard;
