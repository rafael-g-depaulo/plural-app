import React, { useState } from "react";
import Display from "./display";
import { search } from "Api/Mapping";
import { getUser } from "Api/User";

export const MappingSearch = ({ ...props }) => {
  const [users, setUsers] = useState([]);
  const [checklist, setChecklist] = useState(false);
  const [jobs, setJobs] = useState([]);
  const onChecklistChange = (checklist) => {
    setChecklist(checklist);
  };
  const onSubmit = () => {
    search(jobs)
      .then(({ data }) => data.user_ids)
      .then((ids) => ids.map(getUser))
      .then((promisses) => Promise.all(promisses))
      .then((userResponses) => userResponses.map(({ data }) => data.user))
      .then((users) => setUsers(users));
  };

  return (
    <Display
      onChecklistChange={onChecklistChange}
      onJobsChange={setJobs}
      onSubmit={onSubmit}
      data={users}
      filter={checklist}
    />
  );
};

export default MappingSearch;
