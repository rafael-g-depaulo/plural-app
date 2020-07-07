import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router";
import Background from "./Background";
import Header from "./Header";
import Footer from "./Footer";

import ProfileContent from "Components/ProfileContent";
import { getUser } from "Api/User";
import UserContext from "Context/User";

export const Profile = ({ ...props }) => {
  const { id_user } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (id_user !== undefined) {
      getUser(id_user).then((res) => {
        setUser(res.data.user);
      });
    }
  }, [id_user]);

  // redirect user if not mapped
  const history = useHistory()
  const { currentUser } = useContext(UserContext)
  if (!currentUser || !currentUser?.mapping) history.push("/")

  return (
    <Background>
      <Header />
      <ProfileContent user={user} />
      <Footer />
    </Background>
  );
};

export default Profile;
