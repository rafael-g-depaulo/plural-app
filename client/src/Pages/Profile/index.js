import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Background from "./Background";
import Header from "./Header";
import Footer from "./Footer";

import ProfileContent from "Components/ProfileContent";
import { getUser } from "Api/User";

export const Profile = ({ ...props }) => {
  const { id_user } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (id_user !== undefined) {
      getUser(id_user).then((res) => {
        setUser(res.data.user);
      });
    }
  }, []);

  return (
    <Background>
      <Header />
      <ProfileContent user={user} />
      <Footer />
    </Background>
  );
};

export default Profile;
