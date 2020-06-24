import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Gender({ onGenderChange = () => {}, ...props }) {
  const [gender, setGender] = useState("");

  useEffect(() => {
    onGenderChange(gender);
  }, [gender, onGenderChange]);

  function handleGenderChange(e) {
    setGender(e.target.value);
    console.log(e.target.value);
  }

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
              onChange={handleGenderChange}
            />
            masculino
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="binario"
              type="radio"
              onChange={handleGenderChange}
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
              onChange={handleGenderChange}
            />
            feminino
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="genero"
              value="outros"
              type="radio"
              onChange={handleGenderChange}
            />
            outros
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
