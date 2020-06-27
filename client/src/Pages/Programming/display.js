import React from "react";
import styled from "styled-components";
import app_background from "./Background/login_app_fundo.png";
import site_background from "./Background/sitecadastro_fundo.png";
import PluralLogo from "../../Components/PluralLogo";
import ComputerAsset from "../../Components/ComputerAsset/Computador.png";
import Navbar from "../../Components/Navbar";
import EventCard from "./EventCard";
import Title from "./Title";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: minmax(5%, auto) minmax(300px, 676px) minmax(5%, auto);
  grid-template-rows: minmax(0, 3fr) auto;
  grid-template-areas:
    ". content ."
    ".    .    .";

  @media (max-width: 399px) {
    background-image: url(${app_background});
  }

  @media (min-width: 400px) {
    background-image: url(${site_background});
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

const Logo = styled(PluralLogo)`
  margin-right: 40px;
  margin-top: 93.5px;
  margin-bottom: 38.5px;
  height: 63.5px;
  width: 205.5px;

  @media (min-width: 700px) {
    margin-right: 130px;
    margin-top: 150px;
    margin-bottom: 77px;
    height: 127px;
    width: 411px;
  }
`;

const ComputerLogo = styled.img`
  position: relative;
  object-fit: contain;
  object-position: 0 42px;
  width: 360px;
  height: auto;

  @media (min-width: 700px) {
    width: 650px;
    object-position: 0 60px;
  }
`;

export const Display = ({eventList}) => {
  return (
    <Container>
      <Content>
        <TopContent>
          <Logo />
          <Navbar />
          <Title />
        </TopContent>
        {/* lógica para exibir todos os posts, o último sem border-bottom */}
        {eventList.map((item) => {
          if (item === eventList[eventList.length - 1]) {
            return (
              <EventCard
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
              <EventCard
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
