import React from "react";

import Title from "./Title";
import Areas from "./Areas";
import Hashtags from "./Hashtags";
import About from "./About";
import ProfilePhoto from "./ProfilePhoto";
import SocialMedia from "./SocialMedia";

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
              ? user.mapping.art_category
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
