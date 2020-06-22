import React from "react";
import styled from "styled-components";
import { labelFontSize } from "Themes/default";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Instagram = styled(InstagramIcon)`
  width: 100% !important;
  height: 100% !important;
`;
const Facebook = styled(FacebookIcon)`
  width: 100% !important;
  height: 100% !important;
`;
const Twitter = styled(TwitterIcon)`
  width: 100% !important;
  height: 100% !important;
`;
const YouTube = styled(YouTubeIcon)`
  width: 100% !important;
  height: 100% !important;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  padding-bottom: 25px;

  @media (min-width: 500px) {
    padding-bottom: 50px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (min-width: 500px) {
    width: 500px;
  }
`;

const Title = styled.span`
  padding-bottom: 25px;
  max-width: 400px;
  color: #ffffff;
  font-family: Town Text;
  font-size: ${labelFontSize}px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 500px) {
    padding-bottom: 50px;
  }
`;

const IconContainer = styled.a`
  width: 36px;
  height: 36px;
  color: #ffffff;

  &:link,
  &:visited {
    color: #ffffff;
  }

  &:link:active,
  &:visited:active {
    color: #ffffff;
  }

  @media (min-width: 500px) {
    width: 64px;
    height: 64px;
  }
`;

export const SocialMedia = ({
  instagramLink,
  facebookLink,
  twitterLink,
  youtubeLink,
  ...props
}) => {
  return (
    <Container>
      <Title>
        <b>Se interessou?</b> Confira mais informações sobre o perfil através
        das redes sociais.
      </Title>
      <Row>
        <IconContainer href={instagramLink}>
          <Instagram />
        </IconContainer>

        <IconContainer href={facebookLink}>
          <Facebook />
        </IconContainer>

        <IconContainer href={twitterLink}>
          <Twitter />
        </IconContainer>

        <IconContainer href={youtubeLink}>
          <YouTube />
        </IconContainer>
      </Row>
    </Container>
  );
};

export default SocialMedia;
