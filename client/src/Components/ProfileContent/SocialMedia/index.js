import React from "react";
import styled from "styled-components";
import { labelFontSize } from "Themes/default";

import SocialMediaLink from "./SocialMediaLink";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  color: #ffffff;
  padding-bottom: 25px;

  @media (min-width: 500px) {
    padding-bottom: 50px;
  }
`;

const Rows = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;

  @media (min-width: 768px) {
    width: 645px;
  }
`;

const RowBreak = styled.div`
  flex-basis: 100%;
  height: 15px;
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

export const SocialMedia = ({ links, ...props }) => {
  const regexes = {
    deezer: RegExp(/(?:deezer.com)/i),
    facebook: RegExp(/(?:facebook|fb)\.com/i),
    instagram: RegExp(/(?:instagram.com|instagr.am)/i),
    linkedin: RegExp(/(?:linkedin.com)/i),
    soundcloud: RegExp(/(?:soundcloud.com|snd.sc)/i),
    spotify: RegExp(/(?:spotify.com)/i),
    tiktok: RegExp(/(?:tiktok.com)/i),
    tumblr: RegExp(/(?:tumblr.com)/i),
    twitter: RegExp(/(?:twitter.com)/i),
    vimeo: RegExp(/(?:vimeo.com)/i),
    youtube: RegExp(/(?:youtube.com|youtu.be)/i),
  };

  // checks if a link matches a regex in regexes
  // return [socialMedia, link]
  const checkLink = (link) => {
    const domain = new URL(link).hostname;
    const regexList = Object.values(regexes);

    const index = regexList.findIndex((expression) => expression.test(domain));

    if (index !== -1) {
      return [Object.keys(regexes)[index], link];
    }
  };

  // filter out links, builds array with [socialMedia, link]
  const filterLinks = (arr) => {
    return arr.reduce((result, curr) => {
      let socialLink = checkLink(curr);

      if (socialLink !== undefined) {
        result.push(socialLink);
      }

      return result;
    }, []);
  };

  return (
    <Container>
      <Title>
        <b>Se interessou?</b> Confira mais informações sobre o perfil através
        das redes sociais.
      </Title>
      <Rows>
        {filterLinks(links).map((socialLink, index, arr) => (
          <React.Fragment key={index}>
            <SocialMediaLink socialMedia={socialLink[0]} link={socialLink[1]} />

            {/* splits into two rows when there's more than 6 items */}
            {arr.length > 6 && index + 1 === Math.ceil(arr.length / 2) && (
              <RowBreak />
            )}
          </React.Fragment>
        ))}
      </Rows>
    </Container>
  );
};

export default SocialMedia;
