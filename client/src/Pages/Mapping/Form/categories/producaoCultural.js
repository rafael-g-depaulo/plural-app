import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function ProducaoCultural({
  onProducaoCulturalChange = () => {},
  ...props
}) {
  const [producaoCultural, setProducaoCultural] = useState("");

  useEffect(() => {
    onProducaoCulturalChange(producaoCultural);
  }, [producaoCultural, onProducaoCulturalChange]);

  function handleProducaoCulturalChange(e) {
    setProducaoCultural(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <GroupName>Produçao Cultural</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="producaoCultural"
              value="executiva"
              type="radio"
              onChange={handleProducaoCulturalChange}
            />
            executiva
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="producaoCultural"
              value="agente"
              type="radio"
              onChange={handleProducaoCulturalChange}
            />
            agente
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
