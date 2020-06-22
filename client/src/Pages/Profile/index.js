import React from "react";
import Background from "./Background";
import Header from "./Header";
import ProfileContent from "./ProfileContent";
import Footer from "./Footer";

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
