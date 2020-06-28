import React from "react";

import {
  SubTitle,
  Group,
  Container,
  CheckboxLabel,
  Checkbox,
} from "../styles";

export default function Orientation({
  onOrientationChange = () => {},
  ...props
}) {

  return (
    <>
      <SubTitle>ORIENTAÇÃO SEXUAL</SubTitle>
      <Group>
        <Container>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="lésbica"
              type="radio"
              onChange={onOrientationChange}
            />
            lésbica
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="gay"
              type="radio"
              onChange={onOrientationChange}
            />
            gay
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="heterosexual"
              type="radio"
              onChange={onOrientationChange}
            />
            heterosexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="prefiro não dizer"
              type="radio"
              onChange={onOrientationChange}
            />
            prefiro não dizer
          </CheckboxLabel>
        </Container>

        <Container>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="bissexual"
              type="radio"
              onChange={onOrientationChange}
            />
            heterossexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="assexual"
              type="radio"
              onChange={onOrientationChange}
            />
            assexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="pansexual"
              type="radio"
              onChange={onOrientationChange}
            />
            pansexual
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              name="orientation"
              value="outros"
              type="radio"
              onChange={onOrientationChange}
            />
            outros
          </CheckboxLabel>
        </Container>
      </Group>
    </>
  );
}
