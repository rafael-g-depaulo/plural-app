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

export default function Gender({
  onGenderChange = () => {},
  gender,
  ...props
}) {
  return (
    <>
      <SubTitle>IDENTIDADE DE GÊNERO</SubTitle>
      <Group>
        <Container>
          <ContainerInput>
            <Label>
              <Input
                name="genero"
                value="travesti"
                type="radio"
                onChange={onGenderChange}
                defaultChecked={gender === "travesti" ? "checked" : undefined}
              />
              <StyledCheckbox />
              travesti
            </Label>
          </ContainerInput>
          <ContainerInput>
            <Label>
              <Input
                name="genero"
                value="homem trans"
                type="radio"
                onChange={onGenderChange}
                defaultChecked={
                  gender === "homem trans" ? "checked" : undefined
                }
              />
              <StyledCheckbox />
              homem trans
            </Label>
          </ContainerInput>
          <ContainerInput>
            <Label>
              <Input
                name="genero"
                value="pessoa cis"
                type="radio"
                onChange={onGenderChange}
                defaultChecked={gender === "pessoa cis" ? "checked" : undefined}
              />
              <StyledCheckbox />
              pessoa cis
            </Label>
          </ContainerInput>
        </Container>

        <Container>
          <ContainerInput>
            <Label>
              <Input
                name="genero"
                value="mulher trans"
                type="radio"
                onChange={onGenderChange}
                defaultChecked={
                  gender === "mulher trans" ? "checked" : undefined
                }
              />
              <StyledCheckbox />
              mulher trans
            </Label>
          </ContainerInput>
          <ContainerInput>
            <Label>
              <Input
                name="genero"
                value="não-binárie"
                type="radio"
                onChange={onGenderChange}
                defaultChecked={
                  gender === "não-binárie" ? "checked" : undefined
                }
              />
              <StyledCheckbox />
              não-binárie
            </Label>
          </ContainerInput>
          <ContainerInput>
            <Label>
              <Input
                name="genero"
                value="prefiro não dizer"
                type="radio"
                onChange={onGenderChange}
                defaultChecked={
                  gender === "prefiro não dizer" ? "checked" : undefined
                }
              />
              <StyledCheckbox />
              prefiro não dizer
            </Label>
          </ContainerInput>
        </Container>
      </Group>
    </>
  );
}
