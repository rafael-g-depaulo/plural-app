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
