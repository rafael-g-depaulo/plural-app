import React from "react";
import styled from "styled-components";
import app_fundo from "./Background/login_app_fundo.png";
import site_fundo from "./Background/sitecadastro_fundo.png";
import PluralLogo from "../../Components/PluralLogo";
import Checklist from "./Checklist";
import SearchBar from "./SearchBar";
import InfoCard from "./InfoCard";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-columns: minmax(5%, auto) minmax(300px, 670px) minmax(5%, auto);
  grid-template-rows: minmax(0, 3fr) auto;
  grid-template-areas: ". content .";

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
  margin-right: 50px;
  margin-top: 93.5px;
  margin-bottom: 38.5px;
  height: 65px;
  width: 205px;

  @media (min-width: 700px) {
    margin-right: 130px;
    margin-top: 140px;
    margin-bottom: 62px;
    height: 127px;
    width: 411px;
  }
`;

export const Display = ({ onChecklistChange, onJobsChange, onSubmit, ...props }) => {
  const array = [
    {
      id: 1,
      name: "madamy",
      jobs:
        "produção & EQUIPE TÉCNICA - música - artes cênicas - artes visuais - MODA - DANÇA",
      hashtags:
        " #Produçãomusical #DJ #Teatro #Produçãodefestas #Cenografia #Permance",
      image: null,
    },
    {
      id: 2,
      name: "madamy",
      jobs:
        "produção & EQUIPE TÉCNICA - música - artes cênicas - artes visuais - MODA - DANÇA",
      hashtags:
        " #Produçãomusical #DJ #Teatro #Produçãodefestas #Cenografia #Permance",
      image: null,
    },
  ];

  return (
    <Container>
      <Content>
        <Logo />
        <Checklist onChange={onChecklistChange} />
        <SearchBar onJobsChange={onJobsChange} onClick={onSubmit} />
        {/* lógica para exibir todos os posts, o último sem border-bottom */}
        {array.map((item) => {
          if (item === array[array.length - 1]) {
            return (
              <InfoCard
                borderbottom="none"
                key={item.id}
                id={item.id}
                nome={item.name}
                categoria={item.jobs}
                hashtags={item.hashtags}
                imagem={item.image}
              />
            );
          } else {
            return (
              <InfoCard
                borderbottom="1px solid #ffffff"
                key={item.id}
                id={item.id}
                nome={item.name}
                categoria={item.jobs}
                hashtags={item.hashtags}
                imagem={item.image}
              />
            );
          }
        })}
      </Content>
    </Container>
  );
};

export default Display;
