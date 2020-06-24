import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function EquipeTecnica({
  onEquipeTecnicaChange = () => {},
  ...props
}) {
  const [equipeTecnica, setEquipeTecnica] = useState("");

  useEffect(() => {
    onEquipeTecnicaChange(equipeTecnica);
  }, [equipeTecnica, onEquipeTecnicaChange]);

  function handleEquipeTecnicaChange(e) {
    setEquipeTecnica(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <GroupName>Equipe Técnica</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="equipeTecnica"
              value="técnico de som"
              type="radio"
              onChange={handleEquipeTecnicaChange}
            />
            técnico de som
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="equipeTecnica"
              value="iluminação"
              type="radio"
              onChange={handleEquipeTecnicaChange}
            />
            iluminação
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="equipeTecnica"
              value="técnico de luz"
              type="radio"
              onChange={handleEquipeTecnicaChange}
            />
            técnico de luz
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
