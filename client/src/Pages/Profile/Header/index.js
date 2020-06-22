import React from "react";
import styled from "styled-components";
import Logo from "Components/PluralLogo";

import useWidth from "Hooks/useWidth";

const Container = styled.div`
  padding: 25px 0;
  color: #ffffff;

  display: flex;
  justify-content: center;

  @media (min-width: 500px) {
    padding: 50px 0;
  }
`;

const MobileLogo = styled(Logo)`
  max-width: 100%;
`;

export const Header = ({ ...props }) => {
  const width = useWidth();

  const isMobile = width <= 500;

  return (
    <Container>
      {isMobile ? <MobileLogo /> : <Logo height="95px" width="305px" />}
    </Container>
  );
};

export default Header;
