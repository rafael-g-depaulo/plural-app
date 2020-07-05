import React from "react";
import styled from "styled-components";
import Description from "./description";
import ProfilePhoto from "Components/ProfileContent/ProfilePhoto";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 344px;
  height: auto;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: ${(props) => props.borderbottom};

  @media (min-width: 700px) {
    width: 688px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-width: 2px;
  }
`;

const Background = styled(Link)`
  text-decoration: none;
  width: 344px;
  height: auto;
  background-color: rgb(255, 254, 251, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0 22px 15px 22px;

  @media (min-width: 700px) {
    width: 688px;
    padding: 0 44px 30px 44px;
  }
`;

export const InfoCard = ({nome, imgUrl, categoria, hashtags, id, ...props }) => {
  return (
    <Container borderbottom={props.borderbottom}>
      <Background to={`/profile/${id}`} >
        <ProfilePhoto photoSrc={imgUrl}/>
        <Description name={nome} category={categoria} hashtags={hashtags} />
      </Background>
    </Container>
  );
};

export default InfoCard;
