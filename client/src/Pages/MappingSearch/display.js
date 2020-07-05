import React from "react";
import styled from "styled-components";
import app_fundo from "./Background/login_app_fundo.png";
import site_fundo from "./Background/sitecadastro_fundo.png";
import Checklist from "./Checklist";
import SearchBar from "./SearchBar";
import InfoCard from "./InfoCard";
import Navigation from "Components/Navigation"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-columns: minmax(5%, auto) minmax(300px, 700px) minmax(5%, auto);
  grid-template-rows: auto minmax(0, 3fr);
  grid-template-areas:
    "nav nav nav"
    ". content . "
  ;

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


export const Display = ({
  onChecklistChange,
  onJobsChange,
  onSubmit,
  data,
  ...props
}) => {
  return (
    <Container>
      <Content>
        <Navigation />
        <Checklist onChange={onChecklistChange} />
        <SearchBar onJobsChange={onJobsChange} onClick={onSubmit} />
        {/* lógica para exibir todos os posts, o último sem border-bottom */}
        {data.map((item) => {
          if (item === data[data.length - 1]) {
            return (
              <InfoCard
                borderbottom="none"
                key={item.id}
                id={item.id}
                nome={item.name}
                imgUrl={item.mapping.profile_picture}
                categoria={item.mapping.art_category}
                hashtags={item.mapping.professional}
                imagem={item.mapping.profile_picture}
              />
            );
          } else {
            return (
              <InfoCard
                borderbottom="1px solid #ffffff"
                key={item.id}
                id={item.id}
                nome={item.name}
                imgUrl={item.mapping.profile_picture}
                categoria={item.mapping.art_category}
                hashtags={item.mapping.professional}
                imagem={item.mapping.profile_picture}
              />
            );
          }
        })}
      </Content>
    </Container>
  );
};

export default Display;
