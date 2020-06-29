import React from "react"
import styled from "styled-components";

import InputLabel from '../InputLabel'
import Input from '../Input'
import PhotoInput from '../../../../Components/PhotoInput'

import { inputFontSize } from "Themes/default";

import {
    Text,
  } from "../styles";

const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

const TextPhoto = styled.text`
font-family: Town Text;
  font-size: 8 px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
  max-width: 55%;

  @media (min-width: 500px) {
    font-size: 12px;
  }
`;

const StyledTextArea = styled.textarea`
  padding: 15px 20px;
  font-family: Town Text;
  font-size: ${inputFontSize}px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
  background: #000000;
  border: 2px solid #ffffff;
  border-radius: 50px;

  width: ${(props) => props.width || "100%"};

  &:focus {
    outline: none;
  }

  @media (min-width: 500px) {
    padding: 15px 30px;
  }
`;

export default function AboutUser({ onInputBio = () => {}, onUpdateUser = () => {}, ...props }) {
  return (
    <>
      <Text style={{fontWeight: "bold"}}>
        Fale mais sobre você!
      </Text>

      <Group>
        <InputLabel htmlFor="name">
          Como sua pessoa quer ser chamada?
        </InputLabel>
        <Input id="name" name="name" type="text" value="user" onChange={onUpdateUser} />
      </Group>

      <Group>
        <InputLabel htmlFor="bio">
            Conte nos um pouco sobre você e seu trabalho: (biografia)
        </InputLabel>
        <StyledTextArea id="bio" name="bio" type="textarea" value="bio" onChange={onInputBio} />
      </Group>

    <PhotoInput />
    <TextPhoto>A imagem escolhida deve estar no formato JPG ou PNG e ter no máximo 5 MB de tamanho. Dimensões ideais: 600x600 pixels</TextPhoto>
    </>
  );
}
