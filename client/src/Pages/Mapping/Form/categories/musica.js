import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Music({ onMusicaChange = () => {}, ...props }) {
  const [musica, setMusica] = useState("");

  useEffect(() => {
    onMusicaChange(musica);
  }, [musica, onMusicaChange]);

  function handleMusicChange(e) {
    setMusica(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <GroupName>Música</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="music"
              value="apresentação"
              type="radio"
              onChange={handleMusicChange}
            />
            apresentação
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="music"
              value="performance"
              type="radio"
              onChange={handleMusicChange}
            />
            performance
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="music"
              value="trilha sonora"
              type="radio"
              onChange={handleMusicChange}
            />
            trilha sonora
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="music"
              value="composição"
              type="radio"
              onChange={handleMusicChange}
            />
            composição
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="music"
              value="produção"
              type="radio"
              onChange={handleMusicChange}
            />
            produção
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="music"
              value="DJ"
              type="radio"
              onChange={handleMusicChange}
            />
            DJ
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
