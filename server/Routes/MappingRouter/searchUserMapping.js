import Router from "express";
import { searchUsers } from "../../elasticsearch/User/userActions";

export default ({}, config) => {
  return Router(config).post("/users/jobs", async (req, res) => {
    var allJobs = req.body.jobs;

    const users = allJobs.map((job) =>
      searchUsers({
        query: {
          match_phrase_prefix: {
            professional: job,
          },
        },
      })
    );

    const results = await Promise.all(users);
    const resultMap = results
      .flatMap((result) => result.hits.hits)
      .map((result) => result._source.user_id);

    const ids = [...new Set(resultMap)];

    return res.json({ user_ids: ids });
  });
};
