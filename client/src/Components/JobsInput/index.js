import React, { useState } from "react";
import ChipInput from "material-ui-chip-input";

export default function Mapping() {
  const [newJob, setNewJob] = useState();

  const handleDelete = (chipToDelete) => () => {
    setNewJob((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  function handleSubmit(chip) {
    setNewJob(chip);
    console.log("Lista de Jobs:", newJob);
  }

  return (
    <ChipInput
      onChange={(chips) => handleSubmit(chips)}
      onDelete={(chips) => handleDelete(chips)}
      newChipKeyCodes={[32, 13]}
    />
  );
}
