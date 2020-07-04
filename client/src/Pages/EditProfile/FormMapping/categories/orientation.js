import React from "react";

import {
  SubTitle,
  Group,
  Container,
  ContainerInput,
  Label,
  Input,
  StyledCheckbox,
} from "../styles";

export default function Orientation({
  onOrientationChange = () => {},
  orientation,
  ...props
}) {
  return (
    <>
      <SubTitle>ORIENTAÇÃO SEXUAL</SubTitle>
      <Group>
        <Container>
          <ContainerInput>
            <Label>
              <Input
                name="orientation"
                value="lesbica"
                type="radio"
                onChange={onOrientationChange}
                defaultChecked={
                  orientation === "lesbica" ? "checked" : undefined
                }
              />
              <StyledCheckbox />
              lesbica
            </Label>
          </ContainerInput>
          <ContainerInput>
            <Label>
              <Input
                name="orientation"
                value="gay"
                type="radio"
                onChange={onOrientationChange}
                defaultChecked={orientation === "gay" ? "checked" : undefined}
              />
              <StyledCheckbox />
              gay
            </Label>
          </ContainerInput>
          <ContainerInput>
            <Label>
              <Input
                name="orientation"
                value="heterossexual"
                type="radio"
                onChange={onOrientationChange}
                defaultChecked={
                  orientation === "heterossexual" ? "checked" : undefined
                }
              />
              <StyledCheckbox />
              heterossexual
            </Label>
          </ContainerInput>
          <ContainerInput>
            <Label>
              <Input
                name="orientation"
                value="prefiro nao dizer"
                type="radio"
                onChange={onOrientationChange}
                defaultChecked={
                  orientation === "prefiro nao dizer" ? "checked" : undefined
                }
              />
              <StyledCheckbox />
              prefiro não dizer
            </Label>
          </ContainerInput>
        </Container>

        <Container>
          <ContainerInput>
            <Label>
              <Input
                name="orientation"
                value="bissexual"
                type="radio"
                onChange={onOrientationChange}
                defaultChecked={
                  orientation === "bissexual" ? "checked" : undefined
                }
              />
              <StyledCheckbox />
              bissexual
            </Label>
          </ContainerInput>
          <ContainerInput>
            <Label>
              <Input
                name="orientation"
                value="assexual"
                type="radio"
                onChange={onOrientationChange}
                defaultChecked={
                  orientation === "assexual" ? "checked" : undefined
                }
              />
              <StyledCheckbox />
              assexual
            </Label>
          </ContainerInput>
          <ContainerInput>
            <Label>
              <Input
                name="orientation"
                value="pansexual"
                type="radio"
                onChange={onOrientationChange}
                defaultChecked={
                  orientation === "pansexual" ? "checked" : undefined
                }
              />
              <StyledCheckbox />
              pansexual
            </Label>
          </ContainerInput>
          <ContainerInput>
            <Label>
              <Input
                name="orientation"
                value="outros"
                type="radio"
                onChange={onOrientationChange}
                defaultChecked={
                  orientation === "outros" ? "checked" : undefined
                }
              />
              <StyledCheckbox />
              outros
            </Label>
          </ContainerInput>
        </Container>
      </Group>
    </>
  );
}
