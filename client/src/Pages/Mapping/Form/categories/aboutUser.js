import React from "react"
import styled, { css } from "styled-components";

import InputLabel from "../InputLabel";
import PhotoInput from "Components/PhotoInput";

import { inputFontSize } from "Themes/default";

import { Text } from "../styles";

const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  padding-top: ${props => props.paddingTop ?? 0};

  ${props => props.center && css`
    justify-content: center;
    align-items: center;
  `}
`;

const TextPhoto = styled.span`
font-family: Town Text;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
  max-width: 55%;
  margin-top: 10px;

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
  border-radius: 10px;
  resize: none;

  height: 90px;

  width: ${(props) => props.width || "100%"};

  &:hover {
    background-color: #222222;
  }
  
  &:focus {
    outline: none;
    background-color: #303030;
  }


  @media (min-width: 500px) {
    padding: 15px 30px;

    &::-webkit-scrollbar {
      width: 10px;
      background-color: rgba(0, 0, 0, 0);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      width: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: #4285F4;
  }
  }
`;

export default function AboutUser({
  onInputBio = () => {},
  onUpdateProfilePic = () => {},
  ...props
}) {
  return (
    <>
      <Text style={{fontWeight: "bold", marginTop: "10px"}}>
        Fale mais sobre você!
      </Text>

      <Group>
        <InputLabel htmlFor="bio">
          Conte nos um pouco sobre você e seu trabalho: (biografia)
        </InputLabel>
        <StyledTextArea
          id="bio"
          name="bio"
          type="textarea"
          onChange={onInputBio}
        />
      </Group>
    
      <Group center paddingTop="20px">
        {/* <SubTitle style={{alignSelf: "flex-start"}}>Manda uma foto sua</SubTitle> */}
        <PhotoInput onFileChange={onUpdateProfilePic} />
        <TextPhoto>A imagem escolhida deve estar no formato JPG ou PNG e ter no máximo 5 MB de tamanho. Dimensões ideais: 600x600 pixels</TextPhoto>
      </Group>
      
    </>
  );
}
