import React, { useState, useEffect } from "react";

import {
  GroupName,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Orientation({
  onOrientationChange = () => {},
  ...props
}) {
  const [orientation, setOrientation] = useState("");

  useEffect(() => {
    onOrientationChange(orientation);
  }, [orientation, onOrientationChange]);

  function handleOrientationChange(e) {
    setOrientation(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <GroupName>ORIENTAÇÃO SEXUAL</GroupName>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="homossexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            homossexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="assexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            assexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="bissexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            bissexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="prefiro não dizer"
              type="radio"
              onChange={handleOrientationChange}
            />
            prefiro não dizer
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="heterossexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            heterossexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="pansexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            pansexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="interssexual"
              type="radio"
              onChange={handleOrientationChange}
            />
            interssexual
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
