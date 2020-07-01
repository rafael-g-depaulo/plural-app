import Router from "express";
import Mapping from "../../models/Mapping";
import { insertUser, searchUsers } from "../../elasticsearch/User/userActions";

export default ({ User }, config) => {
  return Router(config)
    .post("/users/:user_id/mapping", async (req, res) => {
      const { user_id } = req.params;
      const {
        artistic_name,
        short_biography,
        long_bio,
        sexual_orientation,
        gender_orientation,
        professional,
        art_category,
      } = req.body;

      const user = await User.findByPk(user_id);
      if (!user) {
        return res.status(400).json({ error: "user not found" + user_id });
      }

      const mapping = await Mapping.create({
        artistic_name,
        short_biography,
        long_bio,
        sexual_orientation,
        gender_orientation,
        professional,
        art_category,
        user_id,
      });

      const data = {
        user_id,
        professional,
      };

      await insertUser(user_id, data);

      /* const body = {
        query: {
          match_phrase_prefix: {
            professional: "Fotogr",
          },
        },
      };
      const response = await searchUsers(body);
 */
      return res.json(mapping);
    })
    .post("/users/jobs", async (req, res) => {
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
    })
    .get("/users", (req, res) => {
      const { userIds } = req.body;

      // retornar os usuários cujo id esteja na array userIds
    });
};
