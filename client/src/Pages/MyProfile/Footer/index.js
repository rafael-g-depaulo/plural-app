import React from "react";
import ComputerImage from "Components/ComputerAsset";

import useWidth from "Hooks/useWidth";

export const Header = ({ ...props }) => {
  const width = useWidth();

  const isMobile = width <= 500;

  return isMobile ? (
    <ComputerImage height="125px" />
  ) : (
    <ComputerImage height="250px" />
  );
};

export default Header;
