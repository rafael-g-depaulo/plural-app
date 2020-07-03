import React from "react";

import {
  SubTitle,
  Group,
  Container,
  ContainerInput,
  Label,
  Input,
  StyledCheckbox
} from "../styles";

export default function Gender({ onGenderChange = () => {}, ...props }) {
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
              />
              <StyledCheckbox />
               não-binárie
            </Label>
          </ContainerInput>
          <ContainerInput>
            <Label>
              <Input 
                name="genero"
                value="prefiro nao dizer"
                type="radio"
                onChange={onGenderChange}
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
