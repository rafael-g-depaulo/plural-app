import React, { useState } from "react";
import styled from "styled-components";

import ChipInput from "material-ui-chip-input";

const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export default function Mapping() {
  const [newJob, setNewJob] = useState();

  const handleDelete = (chipToDelete) => () => {
    console.log(newJob);
    setNewJob((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  function handleSubmit(chip) {
    setNewJob(chip);
    console.log(newJob);
  }

  return (
    <>
      <Group>
        <ChipInput
          onChange={(chips) => handleSubmit(chips)}
          onDelete={(chips) => handleDelete(chips)}
          newChipKeyCodes={[32, 13]}
        />
      </Group>
    </>
  );
}
