import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ChipInput from "material-ui-chip-input";

import InputLabel from "./InputLabel";

const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export default function Mapping({ setJobs }) {
  const [newJob, setNewJob] = useState();

  // whenever chipData updates, set jobs
  // se deixar setando os jobs sempre, ele vai pro input e fica uma bagunça
  useEffect(() => {}, [setJobs]);

  const handleDelete = (chipToDelete) => () => {
    setNewJob((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  function handleSubmit(chip) {
    console.log("HANDLE SUBMIT");
    setNewJob([...newJob], chip);
    console.log(newJob);
  }

  return (
    <>
      <Group>
        <InputLabel>Insira seus trabalhos</InputLabel>
        <ChipInput
          value={newJob}
          onAdd={(chip) => handleSubmit(chip)}
          onDelete={(chip) => handleDelete(chip)}
          newChipKeyCodes={[32, 13]}
        />
      </Group>
    </>
  );
}
