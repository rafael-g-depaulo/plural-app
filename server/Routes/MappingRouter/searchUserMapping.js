import Router from "express";
import Mapping from "../models/Mapping";
import { searchUsers } from "../elasticsearch/User/userActions";

export default ({}, config) => {
  return Router(config).post("/users/search/jobs", async (req, res) => {
    const body = {
      query: {
        match_phrase_prefix: {
          professional: "Fotogr",
        },
      },
    };
    const response = await searchUsers(body);
    const jobs = response.hits.hits.map((job) => job._source);
    console.log(jobs);

    return res.json(mapping);
  });
};
