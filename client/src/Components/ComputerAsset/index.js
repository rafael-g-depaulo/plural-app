import React from "react";
import styled from "styled-components";

import computer from "./Computador.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;

  width: ${(props) => props.width || "unset"};
  height: ${(props) => props.height || "unset"};
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ComputerAsset = ({ ...props }) => {
  return (
    <Container {...props}>
      <Img src={computer} alt="Computador" />
    </Container>
  );
};

export default ComputerAsset;
