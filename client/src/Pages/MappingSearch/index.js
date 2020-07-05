import React, { useState, useEffect } from "react";
import Display from "./display";
import { search } from "Api/Mapping";
import { getUser } from "Api/User";

export const MappingSearch = ({ ...props }) => {
  const [users, setUsers] = useState([]);
  const [renderedUsers, setRenderedUsers] = useState([]);
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

  useEffect(() => {
    setRenderedUsers(
      users.filter((user) => user.mapping.art_category
        .some((category) => checklist[category])
      )
    );
  }, [users, checklist]);

  return (
    <Display
      onChecklistChange={onChecklistChange}
      onJobsChange={setJobs}
      onSubmit={onSubmit}
      data={renderedUsers}
    />
  );
};

export default MappingSearch;
