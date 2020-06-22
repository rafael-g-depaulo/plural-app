import React from "react";

import Title from "./Title";
import Areas from "./Areas";
import Hashtags from "./Hashtags";
import About from "./About";
import ProfilePhoto from "./ProfilePhoto";
import SocialMedia from "./SocialMedia";

export const ProfileContent = ({ ...props }) => {
  // placeholder for Areas and Hashtags
  const placeholderArray = [
    "Lorem Ipsum",
    "Ipsum Lorem ",
    "Lorem Ipsum",
    "Lorem",
    "Ipsum",
    "Lorem Ipsum",
    "Ipsum Lorem ",
    "Lorem Ipsum",
  ];

  // placeholder for About
  const placeholderText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  // replace stuff below with actual data
  return (
    <>
      <ProfilePhoto photoSrc="" />

      <Title name="Lorem Ipsum" city="Cidade - DF" />

      <Areas items={placeholderArray} />

      <Hashtags items={placeholderArray} />

      <About content={placeholderText} />

      <SocialMedia
        instagramLink="https://www.google.com.br/"
        facebookLink="https://www.google.com.br/"
        twitterLink="https://www.google.com.br/"
        youtubeLink="https://www.google.com.br/"
      />
    </>
  );
};

export default ProfileContent;
