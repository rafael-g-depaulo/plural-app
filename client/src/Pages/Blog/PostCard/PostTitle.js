import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 191.5px;
  height: auto;
  margin-bottom: -11px;
`;

const Text = styled.p`
  font-family: "Town Text";
  font-size: 16.5px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #ebce8b;
`;

export const PostTitle = ({ title, ...props }) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};

export default PostTitle;
