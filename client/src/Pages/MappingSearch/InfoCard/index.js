import React from "react";
import styled from "styled-components";
import Description from "./description";
// import ProfilePhoto from "Components/ProfileContent/ProfilePhoto";
import { Link } from "react-router-dom";

// import PersonIcon from "@material-ui/icons/Person";
// import PersonIcon from "@material-ui/icons/AcUnitSharp";

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

// const Pic = styled(ProfilePhoto)`
//   color: black;
//   margin-top: 10px;
//   margin-left: -30px;

//   @media (max-width: 699px) {
//     width: 100px;
//     height: 100px;
//     margin-top: 5px;
//     margin-left: 0px;
//   }
// `

const Icon = (props) => (
  <svg className="MuiSvgIcon-root" {...props} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
)
// fallback in case of missing photo
const FallbackIcon = styled(Icon)`
  background-color: #ffffff;
  width: 100px !important;
  height: 100px !important;

  @media (min-width: 700px) {
    height: 150px !important;
    width: 150px !important;
  }
`;

const Photo = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;

  @media (min-width: 700px) {
    height: 200px;
    width: 200px;
    margin-left: 45px;
  }
`;

const PicBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  
  color: black;
  margin-top: 30px;
  margin-left: -50px;

  @media (max-width: 699px) {
    width: 100px;
    height: 100px;
    margin-top: 15px;
    margin-left: 0px;
  }
`;

export const InfoCard = ({nome, imgUrl, categoria, hashtags, id, ...props }) => {
  return (
    <Container borderbottom={props.borderbottom}>
      <Background to={`/profile/${id}`} >
        <PicBox>
          { imgUrl && imgUrl !== "" ? <Photo src={imgUrl} /> : <FallbackIcon /> }
        </PicBox>
        <Description name={nome} category={categoria} hashtags={hashtags} />
      </Background>
    </Container>
  );
};

export default InfoCard;
