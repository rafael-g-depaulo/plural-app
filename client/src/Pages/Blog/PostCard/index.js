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
  border-bottom: ${(props) => props.borderbottom};
  padding-bottom: 34px;
  text-decoration: none;

  @media (min-width: 700px) {
    width: 686px;
    border-width: 2px;
    padding-bottom: 68px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PostCard = ({ titulo, descricao, imagem, ...props }) => {
  return (
    <Container borderbottom={props.borderbottom} to="/">
      <TextContainer>
        <PostTitle title={titulo} />
        <Description description={descricao} />
      </TextContainer>
      <BannerImage image={imagem} />
    </Container>
  );
};

export default PostCard;
