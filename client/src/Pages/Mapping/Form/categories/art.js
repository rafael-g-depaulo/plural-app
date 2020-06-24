import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Art({ onArtChange = () => {}, ...props }) {
  const [art, setArt] = useState("");

  useEffect(() => {
    onArtChange(art);
  }, [art, onArtChange]);

  function handleArtChange(e) {
    setArt(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <GroupName>ARTES VISUAIS</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="art"
              value="ilustração"
              type="radio"
              onChange={handleArtChange}
            />
            ilustração
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="art"
              value="pinturas"
              type="radio"
              onChange={handleArtChange}
            />
            pinturas
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="art"
              value="instalações"
              type="radio"
              onChange={handleArtChange}
            />
            instalações
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="art"
              value="grafite"
              type="radio"
              onChange={handleArtChange}
            />
            grafite
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="art"
              value="serigrafia"
              type="radio"
              onChange={handleArtChange}
            />
            serigrafia
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="art"
              value="artes plásticas"
              type="radio"
              onChange={handleArtChange}
            />
            artes plásticas
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="art"
              value="esculturas"
              type="radio"
              onChange={handleArtChange}
            />
            esculturas
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="art"
              value="cenografia"
              type="radio"
              onChange={handleArtChange}
            />
            cenografia
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="art"
              value="direção de arte"
              type="radio"
              onChange={handleArtChange}
            />
            direção de arte
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="art"
              value="mercenaria"
              type="radio"
              onChange={handleArtChange}
            />
            mercenaria
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
