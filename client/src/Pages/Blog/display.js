import React from "react";
import styled from "styled-components";
import app_fundo from "./Background/login_app_fundo.png";
import site_fundo from "./Background/login_site_fundo.png";
import PluralLogo from "../../Components/PluralLogo";
import ComputerAsset from "../../Components/ComputerAsset/Computador.png";
import Navbar from "../../Components/Navbar";
import Title from "./Title";
import PostCard from "./PostCard/index";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-columns: minmax(5%, auto) minmax(300px, 400px) minmax(5%, auto);
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
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled(PluralLogo)`
  margin-right: 60px;
  margin-top: 93.5px;
  margin-bottom: 38.5px;
`;

const ComputerLogo = styled.img`
  position: relative;
  object-fit: contain;
  object-position: 0 42px;
  width: 370px;
  height: auto;
`;

export const Display = ({ title, description, image, ...props }) => {
  const array = [1, 2, 3];

  return (
    <Container>
      <Content>
        <Logo height="65px" width="205px" />
        <Navbar />
        <Title />
        {/* lógica para exibir todos os posts, o último sem border-bottom */}
        {array.map((element) => {
          if (element === array.length) {
            return (
              <PostCard
                borderBottom="none"
                key={element}
                titulo={title}
                descricao={description}
                imagem={image}
              />
            );
          } else {
            return (
              <PostCard
                borderBottom="1px solid #ffffff"
                key={element}
                titulo={title}
                descricao={description}
                imagem={image}
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
