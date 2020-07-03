import React from "react";
import styled from "styled-components";
import PluralLogo from "Components/PluralLogo";
import Navbar from "Components/Navbar";

import useWidth from "Hooks/useWidth";

const Container = styled.div`
  padding: 40px 0;
  color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 500px) {
    padding: 75px 0;
  }
`;

const Logo = styled(PluralLogo)`
  padding-bottom: 25px;
`;

const MobileLogo = styled(Logo)`
  padding-bottom: 10px;
  max-width: 100%;
`;

export const Header = ({ ...props }) => {
  const width = useWidth();

  const isMobile = width <= 500;

  return (
    <Container>
      {isMobile ? <MobileLogo /> : <Logo height="95px" width="305px" />}
      <Navbar />
    </Container>
  );
};

export default Header;
