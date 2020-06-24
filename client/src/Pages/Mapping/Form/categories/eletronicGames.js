import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function EletronicGames({
  onEletronicGamesChange = () => {},
  ...props
}) {
  const [eletronicGames, setEletronicGames] = useState("");

  useEffect(() => {
    onEletronicGamesChange(eletronicGames);
  }, [eletronicGames, onEletronicGamesChange]);

  function handleEletronicGamesChange(e) {
    setEletronicGames(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <GroupName>Arte Digital e Jogos Eletrônicos</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="eletronicGames"
              value="design"
              type="radio"
              onChange={handleEletronicGamesChange}
            />
            design
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="eletronicGames"
              value="animaçao"
              type="radio"
              onChange={handleEletronicGamesChange}
            />
            animaçao
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="eletronicGames"
              value="vj"
              type="radio"
              onChange={handleEletronicGamesChange}
            />
            VJ
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="eletronicGames"
              value="artista gráfico"
              type="radio"
              onChange={handleEletronicGamesChange}
            />
            artista gráfico
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="eletronicGames"
              value="programação"
              type="radio"
              onChange={handleEletronicGamesChange}
            />
            programação
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="eletronicGames"
              value="desenvolvimento"
              type="radio"
              onChange={handleEletronicGamesChange}
            />
            desenvolvimento
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
