/*
  TO-DO
  Ler o Input do Usuário e...
    - Ao terminar de digitar um texto: [Colocar Espaço / Enter]: 
      - Salvar essa palavra em um Array [setState]
      - Usar useEffect, para criar o chip por volta dessa nova palavra
      - Ver como vai enviar essas palavras para o back-end
*/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

import Input from "./Input";
import InputLabel from "./InputLabel";

const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  @media (min-width: 1024px) {
    padding-bottom: 50px;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function Mapping() {
  const [newJob, setNewJob] = useState("");
  const classes = useStyles();
  const [chipData, setChipData] = useState([]);

  useEffect(() => {}, [chipData]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  function handleInputChange(e) { 
    setNewJob(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setChipData([...chipData, { key: 6, label: newJob }]);
    setNewJob("");
    console.log(chipData);
  }

  return (
    <>
      <Paper component="ul" className={classes.root}>
        {chipData.map((data) => {
          let icon;

          return (
            <>
              <li key={data.key}>
                <Chip
                  icon={icon}
                  label={data.label}
                  onDelete={handleDelete(data)}
                  className={classes.chip}
                />
              </li>
            </>
          );
        })}
      </Paper>
      <Form onSubmit={handleSubmit}>
        <Group>
          <InputLabel htmlFor="email">Insira seus trabalhos</InputLabel>
          <Input
            type="text"
            placeholder="Adicione seus #trabalhos"
            value={newJob}
            onChange={handleInputChange}
          />
        </Group>
      </Form>
    </>
  );
}
