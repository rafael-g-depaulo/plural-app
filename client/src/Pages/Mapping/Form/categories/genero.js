import React from "react";

import {
  SubTitle,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Gender({ onGenderChange = () => {}, ...props }) {
  return (
    <>
      <SubTitle>IDENTIDADE DE GÊNERO</SubTitle>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="travesti"
              type="radio"
              onChange={onGenderChange}
            />
            travesti
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="homem trans"
              type="radio"
              onChange={onGenderChange}
            />
            homem trans
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="pessoa cis"
              type="radio"
              onChange={onGenderChange}
            />
            pessoa cis
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="mulher trans"
              type="radio"
              onChange={onGenderChange}
            />
            mulher trans
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="não-binárie"
              type="radio"
              onChange={onGenderChange}
            />
            não-binárie
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="prefiro não dizer"
              type="radio"
              onChange={onGenderChange}
            />
            prefiro não dizer
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
