import React from "react";
import styled from "styled-components";
import PostTitle from "./PostTitle";
import Description from "./Description";
import BannerImage from "./BannerImage";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 343px;
  height: auto;
  border-bottom: ${(props) => props.borderBottom};
  padding-bottom: 38px;
  text-decoration: none;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PostCard = ({ titulo, descricao, imagem, ...props }) => {
  return (
    <Container borderBottom={props.borderBottom} to="/">
      <TextContainer>
        <PostTitle title={titulo} />
        <Description description={descricao} />
      </TextContainer>
      <BannerImage image={imagem} />
    </Container>
  );
};

export default PostCard;
