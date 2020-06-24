import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Literatura({
  onLiteraturaChange = () => {},
  ...props
}) {
  const [literatura, setLiteratura] = useState("");

  useEffect(() => {
    onLiteraturaChange(literatura);
  }, [literatura, onLiteraturaChange]);

  function handleLiteraturaChange(e) {
    setLiteratura(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <GroupName>Literatura</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="literatura"
              value="edição de livros"
              type="radio"
              onChange={handleLiteraturaChange}
            />
            edição de livros
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="literatura"
              value="jornalista"
              type="radio"
              onChange={handleLiteraturaChange}
            />
            jornalista
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="literatura"
              value="escritor"
              type="radio"
              onChange={handleLiteraturaChange}
            />
            escritor
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="literatura"
              value="blog"
              type="radio"
              onChange={handleLiteraturaChange}
            />
            blog
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
