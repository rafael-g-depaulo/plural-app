import React, { useCallback, useState, useEffect } from "react";
import Display from "./Display";

export const JobsInput = ({
  onJobsChange = () => {},
  defaultJobs,
  ...props
}) => {
  const [jobs, setJobs] = useState(defaultJobs ? defaultJobs : []);

  // update parent when jobs change
  useEffect(() => {
    onJobsChange(jobs);
  }, [jobs, onJobsChange]);

  const onDelete = useCallback(
    (chipToDelete) => {
      setJobs((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    },
    [setJobs]
  );

  const onChange = useCallback(
    (chip) => {
      if (jobs.length !== 6) setJobs(chip);
    },
    [jobs, setJobs]
  );

  return <Display {...{ onChange, onDelete }} defaultValue={jobs} />;
};

export default JobsInput;
