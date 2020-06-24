import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Moda({ onModaChange = () => {}, ...props }) {
  const [moda, setModa] = useState("");

  useEffect(() => {
    onModaChange(moda);
  }, [moda, onModaChange]);

  function handleModaChange(e) {
    setModa(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <GroupName>Moda</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="moda"
              value="figurinista"
              type="radio"
              onChange={handleModaChange}
            />
            figurinista
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="moda"
              value="criação/estilos"
              type="radio"
              onChange={handleModaChange}
            />
            criação/estilos
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="moda"
              value="maquiagem"
              type="radio"
              onChange={handleModaChange}
            />
            maquiagem
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="moda"
              value="corte e custura"
              type="radio"
              onChange={handleModaChange}
            />
            corte e custura
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="moda"
              value="cabelo"
              type="radio"
              onChange={handleModaChange}
            />
            cabelo
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
