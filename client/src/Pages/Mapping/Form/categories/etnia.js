import React from "react";

import {
  SubTitle,
  Group,
  GroupOut,
  ContainerInput,
  Label,
  Input,
  StyledCheckbox,
} from "../styles";

export default function Etnia({ onEtniaChange = () => {}, ...props }) {
    return (
    <>
      <SubTitle>RAÇA / COR / ETNIA</SubTitle>
      <GroupOut onChange={onEtniaChange}>   
        <ContainerInput>
          <Label>
            <Input 
              name="etnia"
              value="negra (preta ou parda-afro-descendente)"
              type="radio"
            />
            <StyledCheckbox />
            negra (preta ou parda-afro-descendente)
          </Label>
        </ContainerInput>
        <ContainerInput>
          <Label>
            <Input 
              name="etnia"
              value="amarela (de ascendência asiática)"
              type="radio"
            />
            <StyledCheckbox />
            amarela (de ascendência asiática)
          </Label>
        </ContainerInput>
      </GroupOut>
      
      <Group onChange={onEtniaChange}>
        <ContainerInput>
          <Label>
            <Input 
              name="etnia"
              value="indígena"
              type="radio"
            />
            <StyledCheckbox />
            indígena
          </Label>
        </ContainerInput>

        <ContainerInput>
          <Label>
            <Input 
              name="etnia"
              value="branca"
              type="radio"
            />
            <StyledCheckbox />
            branca
          </Label>
        </ContainerInput>
      </Group>

    </>
  );
}
