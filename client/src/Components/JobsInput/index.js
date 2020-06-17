import React, { useState, useEffect, useCallback } from "react"
import ChipInput from "material-ui-chip-input"

export default function Mapping({
  onJobsChange = () => {},
  ...props
}) {
  const [ newJob, setNewJob ] = useState([])

  // update parent when jobs change
  useEffect(() => { onJobsChange(newJob) }, [ newJob, onJobsChange ])

  const handleDeleteJob = useCallback((chipToDelete) => () => {
    setNewJob((chips) => chips.filter((chip) => chip.key !== chipToDelete.key))
  }, [])

  const handleNewJob = useCallback((chip) => {
    setNewJob(chip)
  }, [])

  return (
    <ChipInput
      onChange={chips => handleNewJob(chips)}
      onDelete={chips => handleDeleteJob(chips)}
      newChipKeyCodes={[32, 13]}
      {...props}
    />
  )
}
