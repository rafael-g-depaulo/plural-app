import React from "react";
import styled from "styled-components";
import Description from "./description";

const Container = styled.div`
  width: 344px;
  height: 199px;
  
  background-color: #fffefb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 30px;
`;

export const InfoCard = ({ ...props }) => {
  return (
    <Container>
      <Description />
    </Container>
  );
};

export default InfoCard;
