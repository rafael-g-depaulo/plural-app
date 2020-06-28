import React from "react";

import {
  SubTitle,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
  GroupOut,
} from "../styles";

export default function Etnia({ onEtniaChange = () => {}, ...props }) {
    return (
    <>
      <SubTitle>RAÇA / COR / ETNIA</SubTitle>
      <GroupOut>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="etnia"
              value="negra (preta ou parda-afro-descendente)"
              type="radio"
              onChange={onEtniaChange}
            />
            negra (preta ou parda-afro-descendente)
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="etnia"
              value="amarela (de ascendência asiática)"
              type="radio"
              onChange={onEtniaChange}
            />
            amarela (de ascendência asiática)
          </CheckboxLabel>
        </Container>
      </GroupOut>
      
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="etnia"
              value="indigena"
              type="radio"
              onChange={onEtniaChange}
            />
            indigena
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="etnia"
              value="branca"
              type="radio"
              onChange={onEtniaChange}
            />
            branca
          </CheckboxLabel>
        </Container>
      </Group>

    </>
  );
}
