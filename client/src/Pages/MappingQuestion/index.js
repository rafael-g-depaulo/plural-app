import React, { useContext } from "react";
import Background from "./Background";
import Button from "./Button";
import Description from "./Description";
import Logo from "./Logo";
import { updateUser } from "Api/User";
import UserContext from "Context/User/";

export const MappingQuestion = ({ ...props }) => {
  const userContext = useContext(UserContext);

  const updateUserMappingStatus = (isMappingParticipant) => {
    updateUser({ is_mapping_participant: isMappingParticipant })
      .then((res) => userContext.setCurrentUser(res.data.updatedUser))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Background />
      <Logo />
      <Description />
      <Button onClickCallback={(value) => updateUserMappingStatus(value)} />
    </>
  );
};

export default MappingQuestion;
