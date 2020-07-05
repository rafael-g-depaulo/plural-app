import React, { useState, useEffect, useCallback } from "react";
import Display from "./display";
import { search } from "Api/Mapping";
import { getUser } from "Api/User";

export const MappingSearch = ({ ...props }) => {
  const [users, setUsers] = useState([]);
  const [renderedUsers, setRenderedUsers] = useState([]);
  const [checklist, setChecklist] = useState(false);
  const [jobs, setJobs] = useState([]);

  const onSubmit = useCallback(() => {
    search(jobs)
      .then(({ data }) => data.user_ids)
      .then(aa => { console.log("aaa", aa); return aa})
      .then((ids) => ids.map(getUser))
      .then((promisses) => Promise.all(promisses))
      .then((userResponses) => userResponses.map(({ data }) => data?.user))
      .then((users) => setUsers(users));
  }, [ jobs ]);

  useEffect(() => {
    setRenderedUsers(
      users.filter((user) => user && user.mapping && user.mapping.art_category && user.mapping.art_category
        .some((category) => checklist[category])
      )
    );
  }, [users, checklist]);

  return (
    <Display
      onChecklistChange={setChecklist}
      onJobsChange={setJobs}
      onSubmit={onSubmit}
      data={renderedUsers}
    />
  );
};

export default MappingSearch;
