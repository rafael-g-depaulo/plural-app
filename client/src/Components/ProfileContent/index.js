import React from "react";

import Title from "./Title";
import Areas from "./Areas";
import Hashtags from "./Hashtags";
import About from "./About";
import ProfilePhoto from "./ProfilePhoto";
import SocialMedia from "./SocialMedia";

const artCategoryMap = {
  1: "Artes Cênicas",
  2: "Artes Visuais",
  3: "Comunicação",
  4: "Cinema e Fotografia",
  5: "Dança",
  6: "Produção e Equipes Técnicas para Projetos Culturais",
  7: "Jogos Eletrônicos, APPs e Sites",
  8: "Litetura, Influencers e Youtubers",
  9: "Moda",
  10: "Música",
}

export const ProfileContent = ({ user, ...props }) => {
  return (
    <>
      {user.mapping && (
        <ProfilePhoto
          photoSrc={
            user.mapping.profile_picture ? user.mapping.profile_picture : ""
          }
        />
      )}

      <Title
        name={user.name ? user.name : ""}
        city={user.city ? user.city : ""}
      />

      {/* shouldnt it be an array? api returns int */}
      {user.mapping && (
        <Areas
          items={
            Array.isArray(user.mapping.art_category)
              ? user.mapping.art_category.map(x => artCategoryMap[x])
              : []
          }
        />
      )}

      {user.mapping && (
        <Hashtags
          items={user.mapping.professional ? user.mapping.professional : []}
        />
      )}

      {user.mapping && (
        <About content={user.mapping.long_bio ? user.mapping.long_bio : ""} />
      )}

      {user.mapping && (
        <SocialMedia
          links={[
            user.mapping.facebook || "",
            user.mapping.instagram || "",
            user.mapping.linkedin || "",
            user.mapping.youtube || "",
            user.mapping.twitter || "",
            user.mapping.spotify || "",
            user.mapping.deezer || "",
            user.mapping.tiktok || "",
            user.mapping.tumblr || "",
            user.mapping.vimeo || "",
          ]}
        />
      )}
    </>
  );
};

export default ProfileContent;
