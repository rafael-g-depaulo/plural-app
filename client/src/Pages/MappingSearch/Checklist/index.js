import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 330px;
  max-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-right: 12px;

  @media (min-width: 700px) {
    width: 660px;
    max-height: 360px;
    margin-right: 24px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;

  @media (min-width: 700px) {
    margin-left: 25px;
  }
`;

const ItemName = styled.p`
  max-width: 135px;
  height: auto;
  font-family: "Town Text";
  font-size: 16.5px;
  font-weight: 700;
  color: #ffffff;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  text-transform: uppercase;
  padding-left: 5px;
  margin: 0;

  @media (min-width: 700px) {
    max-width: 270px;
    font-size: 33px;
    padding-left: 10px;
  }
`;

const Item = styled.input`
  border: solid 1px #fffefe;
  -webkit-appearance: none;
  background-color: #000000;

  &:focus {
    background-color: #777;
    outline: none;
  }

  &:hover {
    background-color: #999;
    cursor: pointer;
  }

  @media (max-width: 699px) {
    width: 12px;
    height: 12px;
    &:checked {
      border: solid 1px #fffefe;
      background-color: white;
      width: 12px;
      height: 12px;
    }
    &:focus {
      border: solid 2px #fffefe;
    }
  }

  @media (min-width: 700px) {
    width: 26px;
    height: 26px;
    border: solid 2px #fffefe;

    &:checked {
      border: solid 2px #fffefe;
      background-color: white;
      width: 26px;
      height: 26px;
    }
    &:focus {
      border: solid 3px #fffefe;
    }
  }
`;

export const Checklist = ({ onChange = () => {}, ...props }) => {
  const [cenicas, setCenicas] = useState(false);
  const [comunicacao, setComunicacao] = useState(false);
  const [danca, setDanca] = useState(false);
  const [producao, setProducao] = useState(false);
  const [moda, setModa] = useState(false);
  const [musica, setMusica] = useState(false);
  const [artesVis, setArtesVis] = useState(false);
  const [cinema, setCinema] = useState(false);
  const [games, setGames] = useState(false);
  const [literatura, setLiteratura] = useState(false);

  useEffect(() => {
    onChange({
      "Artes Cênicas": cenicas,
      "Artes Visuais": artesVis,
      "Comunicação": comunicacao,
      "Cinema e Fotografia": cinema,
      "Dança": danca,
      "Produção e Equipes Técnicas para Projetos Culturais": producao,
      "Jogos Eletrônicos, APPs e Sites": games,
      "Literatura, Influencers e Youtubers": literatura,
      "Moda": moda,
      "Música": musica,
    });
  }, [
    cenicas,
    comunicacao,
    danca,
    producao,
    moda,
    musica,
    artesVis,
    cinema,
    games,
    literatura,
    onChange,
  ]);

  return (
    <Container>
      <ItemContainer>
        <Item
          type="checkbox"
          onClick={() => setCenicas((a) => !a)}
          checked={cenicas}
          onChange={() => {}}
        />
        <ItemName onClick={() => setCenicas((a) => !a)}>Artes Cênicas</ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item
          type="checkbox"
          onClick={() => setComunicacao((a) => !a)}
          checked={comunicacao}
          onChange={() => {}}
        />
        <ItemName onClick={() => setComunicacao((a) => !a)}>
          comunicação
        </ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item
          type="checkbox"
          onClick={() => setDanca((a) => !a)}
          checked={danca}
          onChange={() => {}}
        />
        <ItemName onClick={() => setDanca((a) => !a)}>dança</ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item
          type="checkbox"
          onClick={() => setProducao((a) => !a)}
          checked={producao}
          onChange={() => {}}
        />
        <ItemName onClick={() => setProducao((a) => !a)}>
          produção & equipe técnica
        </ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item
          type="checkbox"
          onClick={() => setModa((a) => !a)}
          checked={moda}
          onChange={() => {}}
        />
        <ItemName onClick={() => setModa((a) => !a)}>moda</ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item
          type="checkbox"
          onClick={() => setMusica((a) => !a)}
          checked={musica}
          onChange={() => {}}
        />
        <ItemName onClick={() => setMusica((a) => !a)}>música</ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item
          type="checkbox"
          onClick={() => setArtesVis((a) => !a)}
          checked={artesVis}
          onChange={() => {}}
        />
        <ItemName onClick={() => setArtesVis((a) => !a)}>
          Artes visuais
        </ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item
          type="checkbox"
          onClick={() => setCinema((a) => !a)}
          checked={cinema}
          onChange={() => {}}
        />
        <ItemName onClick={() => setCinema((a) => !a)}>
          cinema e fotografia
        </ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item
          type="checkbox"
          onClick={() => setGames((a) => !a)}
          checked={games}
          onChange={() => {}}
        />
        <ItemName onClick={() => setGames((a) => !a)}>
          apps, jogos eletrônicos e sites
        </ItemName>
      </ItemContainer>
      <ItemContainer>
        <Item
          type="checkbox"
          onClick={() => setLiteratura((a) => !a)}
          checked={literatura}
          onChange={() => {}}
        />
        <ItemName onClick={() => setLiteratura((a) => !a)}>
          literatura, influencers e youtubers
        </ItemName>
      </ItemContainer>
    </Container>
  );
};

export default Checklist;
