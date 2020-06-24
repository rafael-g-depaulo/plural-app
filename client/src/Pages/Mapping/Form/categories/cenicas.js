import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Cenicas({ onCenicasChange = () => {}, ...props }) {
  const [cenicas, setCenicas] = useState("");

  useEffect(() => {
    onCenicasChange(cenicas);
  }, [cenicas, onCenicasChange]);

  function handleCenicasChange(e) {
    setCenicas(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <GroupName>ARTES CÊNICAS</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="cenicas"
              value="drag queen"
              type="radio"
              onChange={handleCenicasChange}
            />
            drag queen
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="cenicas"
              value="teatro"
              type="radio"
              onChange={handleCenicasChange}
            />
            teatro
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="cenicas"
              value="performance"
              type="radio"
              onChange={handleCenicasChange}
            />
            performance
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="cenicas"
              value="circo"
              type="radio"
              onChange={handleCenicasChange}
            />
            circo
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
