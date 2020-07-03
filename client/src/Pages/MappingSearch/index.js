import React, { useState } from "react";
import Display from "./display";

export const MappingSearch = ({ ...props }) => {
  const [checklist, setChecklist] = useState(false);
  const [jobs, setJobs] = useState([]);
  const onChecklistChange = (checklist) => {
    setChecklist(checklist);
  };
  const onSubmit = () => {};

  return (
    <Display
      onChecklistChange={onChecklistChange}
      onJobsChange={setJobs}
      onSubmit={onSubmit}
    />
  );
};

export default MappingSearch;
