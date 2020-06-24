import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Comunication({
  onComunicationChange = () => {},
  ...props
}) {
  const [comunication, setComunication] = useState("");

  useEffect(() => {
    onComunicationChange(comunication);
  }, [comunication, onComunicationChange]);

  function handleComunicationChange(e) {
    setComunication(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <GroupName>COMUNICAÇÃO</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="comunication"
              value="jornalismo"
              type="radio"
              onChange={handleComunicationChange}
            />
            jornalismo
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="comunication"
              value="assessoria de imprensa"
              type="radio"
              onChange={handleComunicationChange}
            />
            assessoria de imprensa
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="comunication"
              value="publicidade"
              type="radio"
              onChange={handleComunicationChange}
            />
            publicidade
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
