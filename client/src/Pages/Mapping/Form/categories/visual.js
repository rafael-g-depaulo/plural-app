import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Visual({ onVisualChange = () => {}, ...props }) {
  const [visual, setVisual] = useState("");

  useEffect(() => {
    onVisualChange(visual);
  }, [visual, onVisualChange]);

  function handleVisualChange(e) {
    setVisual(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <GroupName>Audiovisual</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="visual"
              value="cinema"
              type="radio"
              onChange={handleVisualChange}
            />
            cinema
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="visual"
              value="conteúdo web"
              type="radio"
              onChange={handleVisualChange}
            />
            conteúdo web
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="visual"
              value="fotografia"
              type="radio"
              onChange={handleVisualChange}
            />
            fotografia
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
