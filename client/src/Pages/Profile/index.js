import React from "react";
import Background from "./Background";
import Header from "./Header";
import Footer from "./Footer";

import ProfileContent from "Components/ProfileContent";

export const Profile = ({ ...props }) => {
  return (
    <Background>
      <Header />
      <ProfileContent />
      <Footer />
    </Background>
  );
};

export default Profile;
