import React, { useState, useEffect, useCallback } from "react"
import ChipInput from "material-ui-chip-input"
import { inputFontSize } from "Themes/default";

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

  function handleNewJob(chip){
    console.log(newJob.length)
    if (newJob.length !== 6) {
      setNewJob(chip)
      console.log(chip)
    } 
  }

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
          style={{
            color: 'white',
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 30,
            paddingRight: 30,
            background: '#FFFF',
            width: '100%', 
            border: '2px solid #00000',
            borderRadius: 50,
          }}
          onChange={chips => handleNewJob(chips)}
          onDelete={(chip) => handleDeleteJob(chip)}
          newChipKeyCodes={[32, 13]}
          {...props}
        />
        </Text>

      </Container>
    </>
  );
}
