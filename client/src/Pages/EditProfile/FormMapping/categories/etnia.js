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

export default function Etnia({ etnia, onEtniaChange = () => {}, ...props }) {
    return (
    <>
      <SubTitle>RAÇA / COR / ETNIA</SubTitle>
      <GroupOut>   
        <ContainerInput>
          <Label>
            <Input 
              name="etnia"
              value="negra (preta ou parda-afro-descendente)"
              type="radio"
              onChange={onEtniaChange}
              defaultChecked={
                etnia === "negra (preta ou parda-afro-descendente)" ? "checked" : undefined
              }
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
              onChange={onEtniaChange}
              defaultChecked={
                etnia === "amarela (de ascendência asiática)" ? "checked" : undefined
              }
            />
            <StyledCheckbox />
            amarela (de ascendência asiática)
          </Label>
        </ContainerInput>
      </GroupOut>
      
      <Group>
        <ContainerInput>
          <Label>
            <Input 
              name="etnia"
              value="indígena"
              type="radio"
              onChange={onEtniaChange}
              defaultChecked={
                etnia === "indígena" ? "checked" : undefined
              }
            />
            <StyledCheckbox />
            indigena
          </Label>
        </ContainerInput>

        <ContainerInput>
          <Label>
            <Input 
              name="etnia"
              value="branca"
              type="radio"
              onChange={onEtniaChange}
              defaultChecked={
                etnia === "branca" ? "checked" : undefined
              }
            />
            <StyledCheckbox />
            branca
          </Label>
        </ContainerInput>
      </Group>

    </>
  );
}
