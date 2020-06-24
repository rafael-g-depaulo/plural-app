import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Danca({ onDancaChange = () => {}, ...props }) {
  const [danca, setDanca] = useState("");

  useEffect(() => {
    onDancaChange(danca);
  }, [danca, onDancaChange]);

  function handleDancaChange(e) {
    setDanca(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <GroupName>DANCA</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="danca"
              value="urbana"
              type="radio"
              onChange={handleDancaChange}
            />
            urbana
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="danca"
              value="contemporânea"
              type="radio"
              onChange={handleDancaChange}
            />
            contemporânea
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="danca"
              value="clássica"
              type="radio"
              onChange={handleDancaChange}
            />
            clássica
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="danca"
              value="vogue"
              type="radio"
              onChange={handleDancaChange}
            />
            vogue
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
