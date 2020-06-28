import React, { useState, useEffect, useCallback } from "react"
import ChipInput from "material-ui-chip-input"

import {
  SubTitle,
  Container,
  Text,
} from "../styles";

export default function Jobs({ onJobsChange = () => {}, ...props }) {
  const [ newJob, setNewJob ] = useState([])

  // update parent when jobs change
  useEffect(() => { onJobsChange(newJob) }, [ newJob, onJobsChange ])

  const handleDeleteJob = useCallback((chipToDelete) => () => {
    setNewJob((chips) => chips.filter((chip) => chip.key !== chipToDelete.key))
  }, [])

  const handleNewJob = useCallback((chip) => {
    setNewJob(chip)
  }, [])

  // LIMITAR 6

  return (
    <>
      <SubTitle>
        Coloque até 6 hashtags com os principais destaques do seu 
        perfil profissional:
      </SubTitle>
      <Container>
        <Text>
          ex: #ArtistaMultimídia #Designer #Ilustrador #VJ 
        <ChipInput
          style={{background: '#FFFF', width: '100%'}}
          onChange={chips => handleNewJob(chips)}
          onDelete={chips => handleDeleteJob(chips)}
          newChipKeyCodes={[32, 13]}
          {...props}
        />
        </Text>

      </Container>
    </>
  );
}
