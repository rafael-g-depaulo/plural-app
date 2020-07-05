import React from "react";
import styled from "styled-components";

import PersonIcon from "@material-ui/icons/Person";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

// fallback in case of missing photo
const FallbackIcon = styled(PersonIcon)`
  background-color: #ffffff;
  width: 150px !important;
  height: 150px !important;

  @media (min-width: 500px) {
    height: 200px !important;
    width: 200px !important;
  }
`;

const Photo = styled.img`
  height: 150px;
  object-fit: contain;

  @media (min-width: 500px) {
    height: 200px;
  }
`;

export const ProfilePhoto = ({ photoSrc, ...props }) => {
  return (
    <Container>
      {photoSrc ? <Photo src={photoSrc} /> : <FallbackIcon />}
    </Container>
  );
};

export default ProfilePhoto;
