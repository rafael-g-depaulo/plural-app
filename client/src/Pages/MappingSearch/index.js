import React, { useState, useEffect, useCallback } from "react";
import Display from "./display";
import { search } from "Api/Mapping";
import { getUser } from "Api/User";

export const MappingSearch = ({ ...props }) => {
  const [users, setUsers] = useState([]);
  const [renderedUsers, setRenderedUsers] = useState([]);
  const [checklist, setChecklist] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setLoading] = useState(false)

  const onSubmit = useCallback(() => {
    setLoading(true)
    search(jobs)
      .then(({ data }) => data.user_ids)
      .then((ids) => ids.map(getUser))
      .then((promisses) => Promise.all(promisses))
      .then((userResponses) => userResponses.map(({ data }) => data?.user))
      .then((users) => setUsers(users))
      .then(() => setLoading(false))
      .catch(err => { console.log("error while fetching users", err); setLoading(false) })
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
      isLoading={isLoading}
      data={renderedUsers}
    />
  );
};

export default MappingSearch;
