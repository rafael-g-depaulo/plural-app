import React, { useCallback } from "react";

import { FormContainer, Title } from "./styles";

import SubmitButton from "../SubmitButton";

import Gender from "./categories/genero";
import Orientation from "./categories/orientation";
import Culture from "./categories/culture";
import Music from "./categories/musica";
import Art from "./categories/art";
import Comuncation from "./categories/comuncation";
import Cenicas from "./categories/cenicas";
import Danca from "./categories/danca";
import Literatura from "./categories/literatura";
import Visual from "./categories/visual";
import EletronicGames from "./categories/eletronicGames";
import ProducaoCultural from "./categories/producaoCultural";
import EquipeTecnica from "./categories/equipeTecnica";
import Moda from "./categories/moda";

export const Form = () => {
  const onSubmitButton = useCallback((e) => {
    e.preventDefault();

    console.log("Deu Submit!");
  }, []);

  return (
    <FormContainer onSubmit={onSubmitButton}>
      <Title>MAPEAMENTO</Title>
      <Gender />
      <Orientation />
      <Culture />
      <Title style={{ marginTop: 40 }}>SUBCATEGORIA</Title>
      <Music />
      <Art />
      <Comuncation />
      <Cenicas />
      <Danca />
      <Literatura />
      <Visual />
      <EletronicGames />
      <ProducaoCultural />
      <EquipeTecnica />
      <Moda />
      <SubmitButton />
    </FormContainer>
  );
};

export default Form;
