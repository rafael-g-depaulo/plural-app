import React from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Gender({ onGenderChange = () => {}, ...props }) {
  return (
    <>
      <GroupName>IDENTIDADE DE GÊNERO</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="masculino"
              type="radio"
              onChange={onGenderChange}
            />
            masculino
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="binario"
              type="radio"
              onChange={onGenderChange}
            />
            binario
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="feminino"
              type="radio"
              onChange={onGenderChange}
            />
            feminino
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="outros"
              type="radio"
              onChange={onGenderChange}
            />
            outros
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
