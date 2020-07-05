import React from "react";
import styled from "styled-components";
import app_fundo from "./Background/login_app_fundo.png";
import site_fundo from "./Background/login_site_fundo.png";
import ComputerAsset from "Components/ComputerAsset/Computador.png";
import Title from "./Title";
import PostCard from "./PostCard/index";
import Navigation from "Components/Navigation";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-columns: minmax(5%, auto) minmax(300px, 670px) minmax(5%, auto);
  grid-template-rows: minmax(0, 3fr) auto;
  grid-template-areas:
    ". content ."
    ".    .    .";

  @media (max-width: 399px) {
    background-image: url(${app_fundo});
  }

  @media (min-width: 400px) {
    background-image: url(${site_fundo});
  }
`;

const Content = styled.div`
  height: 100%;
  grid-area: content;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ComputerLogo = styled.img`
  position: relative;
  object-fit: contain;
  object-position: 0 42px;
  width: 370px;
  height: auto;

  @media (min-width: 700px) {
    width: 650px;
    object-position: 0 60px;
  }
`;

export const Display = ({ postList }) => {
  return (
    <Container>
      <Content>
        <TopContent>
          <Navigation />
          <Title />
        </TopContent>
        {/* lógica para exibir todos os posts, o último sem border-bottom */}
        {postList.map((item) => {
          if (item === postList[postList.length - 1]) {
            return (
              <PostCard
                borderbottom="none"
                key={item.id}
                id={item.id}
                titulo={item.title}
                descricao={item.body}
                imagem={`${process.env.REACT_APP_STRAPI_URL}${item.capa.url}`}
              />
            );
          } else {
            return (
              <PostCard
                borderbottom="1px solid #ffffff"
                key={item.id}
                id={item.id}
                titulo={item.title}
                descricao={item.body}
                imagem={`${process.env.REACT_APP_STRAPI_URL}${item.capa.url}`}
              />
            );
          }
        })}
        <ComputerLogo src={ComputerAsset} alt="computador" />
      </Content>
    </Container>
  );
};

export default Display;
