import React from "react";
import styled from "styled-components";

import Deezer from "./Icons/deezer.svg";
import Facebook from "./Icons/facebook.svg";
import Instagram from "./Icons/instagram.svg";
import Linkedin from "./Icons/linkedin.svg";
import Soundcloud from "./Icons/soundcloud.svg";
import TikTok from "./Icons/tiktok.svg";
import Spotify from "./Icons/spotify.svg";
import Tumblr from "./Icons/tumblr.svg";
import Twitter from "./Icons/twitter.svg";
import Vimeo from "./Icons/vimeo.svg";
import YouTube from "./Icons/youtube.svg";

const Icon = styled.img`
  height: 100%;
  object-fit: contain;
  color: #ffffff;
`;
const IconContainer = styled.a`
  display: flex;
  justify-content: center;
  width: 16%;
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

  @media (min-width: 768px) {
    height: 60px;
  }
`;

export const SocialMediaLink = ({ socialMedia, link, ...props }) => {
  const icons = {
    deezer: Deezer,
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    soundcloud: Soundcloud,
    spotify: Spotify,
    tiktok: TikTok,
    tumblr: Tumblr,
    twitter: Twitter,
    vimeo: Vimeo,
    youtube: YouTube,
  };

  return (
    <IconContainer href={link}>
      <Icon src={icons[socialMedia]} alt={socialMedia} />
    </IconContainer>
  );
};

export default SocialMediaLink;
