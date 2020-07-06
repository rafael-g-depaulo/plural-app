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
  color: black;
  width: ${props => props.smallSize ?? "150px"} !important;
  height: ${props => props.smallSize ?? "150px"} !important;

  @media (min-width: ${props => props.break ?? "500px"}) {
    height: ${props => props.bigSize ?? "200px"} !important;
    width: ${props => props.bigSize ?? "200px"} !important;
  }
`;

const Photo = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;

  @media (min-width: 500px) {
    height: 200px;
    width: 200px;
  }
`;

export const ProfilePhoto = ({ photoSrc, ...props }) => {
  return (
    <Container {...props}>
      {photoSrc ? <Photo src={photoSrc} /> : <FallbackIcon {...props} />}
    </Container>
  );
};

export default ProfilePhoto;
