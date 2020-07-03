import React, { useContext } from "react";
import Background from "./Background";
import Header from "./Header";
import EditButton from "./EditButton";
import Footer from "./Footer";

import ProfileContent from "Components/ProfileContent";

import UserContext from "Context/User";

export const MyProfile = ({ ...props }) => {
  const user = useContext(UserContext);

  return (
    <Background>
      <Header />
      <ProfileContent />
      <EditButton />
      <Footer />
    </Background>
  );
};

export default MyProfile;
