import React from "react";
import styled from "styled-components";
import Description from "./description";
import ProfilePhoto from "Components/ProfileContent/ProfilePhoto";
import { Link } from "react-router-dom";

// import PersonIcon from "@material-ui/icons/Person";
import PersonIcon from "@material-ui/icons/AcUnitSharp";

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

const Pic = styled(ProfilePhoto)`
  color: black;
  margin-top: 10px;
  margin-left: -30px;

  @media (max-width: 699px) {
    width: 100px;
    height: 100px;
    margin-top: 5px;
    margin-left: 0px;
  }
`

// fallback in case of missing photo
const FallbackIcon = styled(PersonIcon)`
  background-color: #ffffff;
  color: black;
  width: 100px !important;
  height: 100px !important;

  @media (min-width: 700px) {
    height: 150px !important;
    width: 150px !important;
  }
`;

export const InfoCard = ({nome, imgUrl, categoria, hashtags, id, ...props }) => {
  return (
    <Container borderbottom={props.borderbottom}>
      <Background to={`/profile/${id}`} >
        <Pic Fallback={FallbackIcon} photoSrc={imgUrl}/>
        <Description name={nome} category={categoria} hashtags={hashtags} />
      </Background>
    </Container>
  );
};

export default InfoCard;
