import React, { useCallback, useState, useEffect } from 'react'
import Display from './Display'

export const JobsInput = ({
  onJobsChange = () => {},
  ...props
}) => {
  const [ jobs, setJobs ] = useState([])

  // update parent when jobs change
  useEffect(() => { onJobsChange(jobs) }, [ jobs, onJobsChange ])

  const onDelete = useCallback(chipToDelete => {
    setJobs(chips => chips.filter(chip => chip.key !== chipToDelete.key))
  }, [setJobs])

  const onChange = useCallback(chip => {
    setJobs(chip)
  }, [setJobs])

  return (
    <Display
      {...{ onChange, onDelete } }
    />
  )
}

export default JobsInput
