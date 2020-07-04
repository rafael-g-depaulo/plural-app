import Router from "express";
import Mapping from "models/Mapping";
import {
  insertUser,
  updateUser,
  searchUsers,
} from "elasticsearch/User/userActions";
import AuthMiddleware from "Middlewares/AuthMiddleware";

const sexualOrientationMap = new Map([
  ["lésbica", 1],
  ["bissexual", 2],
  ["gay", 3],
  ["heterossexual", 4],
  ["pansexual", 5],
  ["assexual", 6],
  ["prefiro não dizer", 7],
  ["outros", 8],
]);

const genderMap = new Map([
  ["travesti", 1],
  ["mulher trans", 2],
  ["homem trans", 3],
  ["não-binárie", 4],
  ["pessoa cis", 5],
  ["prefiro não dizer", 6],
]);

function destructureUser(user) {
  const {
    id,
    email,
    name,
    birthdate,
    phone_number: phoneNumber,
    is_lgbtq: isLgbtq,
    active,
    city,
    provider,
    provider_id: providerId,
    mapping,
    is_mapping_participant: isMappingParticipant,
  } = user;

  return {
    id,
    email,
    name,
    birthdate,
    phoneNumber,
    active,
    isLgbtq,
    city,
    provider,
    providerId,
    mapping,
    isMappingParticipant,
  };
}

export default ({ User }, config) => {
  return Router(config)
    .post("/users/mapping", AuthMiddleware.verifyToken, async (req, res) => {
      const user_id = req.decoded.user.id;

      let {
        artistic_name,
        short_biography,
        long_bio,
        sexual_orientation,
        gender_orientation,
        professional,
        art_category,
        profile_pic,
        ethnicity,
        facebook,
        instagram,
        linkedin,
        youtube,
        twitter,
        spotify,
        deezer,
        tiktok,
        tumblr,
        vimeo,
      } = req.body;

      console.log(
        facebook,
        instagram,
        linkedin,
        youtube,
        twitter,
        spotify,
        deezer,
        tiktok,
        tumblr,
        vimeo
      );

      sexual_orientation = sexualOrientationMap.get(sexual_orientation);
      gender_orientation = genderMap.get(gender_orientation);

      let user = await User.findOne({
        where: { id: user_id },
      });

      console.log("Found the following user:", user);

      if (!user) {
        return res.status(400).json({ error: "user not found" + user_id });
      }

      try {
        const mapping = await Mapping.create({
          artistic_name,
          short_biography,
          long_bio,
          sexual_orientation,
          gender_orientation,
          professional,
          art_category,
          user_id,
          profile_pic,
          ethnicity,
          facebook,
          instagram,
          linkedin,
          youtube,
          twitter,
          spotify,
          deezer,
          tiktok,
          tumblr,
          vimeo,
        });

        console.log("MAPPING MAPPING", mapping);

        user = await User.findOne({
          where: { id: user_id },
          include: [
            {
              model: Mapping,
              as: "mapping",
            },
          ],
        });

        const data = {
          user_id,
          professional,
        };

        await insertUser(user_id, data);

        return res.status(200).json(destructureUser(user));
      } catch (err) {
        console.log(err);

        return res.status(422).json({
          message: "An error has occurred while creating mapping.",
        });
      }
    })
    .put("/users/mapping", AuthMiddleware.verifyToken, async (req, res) => {
      const user_id = req.decoded.user.id;

      let {
        artistic_name,
        short_biography,
        long_bio,
        sexual_orientation,
        gender_orientation,
        professional,
        art_category,
        profile_pic,
        ethnicity,
        facebook,
        instagram,
        linkedin,
        youtube,
        twitter,
        spotify,
        deezer,
        tiktok,
        tumblr,
        vimeo,
        id,
      } = req.body;

      sexual_orientation = sexualOrientationMap.get(sexual_orientation);
      gender_orientation = genderMap.get(gender_orientation);

      let user = await User.findOne({
        where: { id: user_id },
      });

      console.log("Found the following user:", user);

      if (!user) {
        return res.status(400).json({ error: "user not found" + user_id });
      }

      try {
        const mapping = await Mapping.update(
          {
            artistic_name,
            short_biography,
            long_bio,
            sexual_orientation,
            gender_orientation,
            professional,
            art_category,
            profile_pic,
            ethnicity,
            facebook,
            instagram,
            linkedin,
            youtube,
            twitter,
            spotify,
            deezer,
            tiktok,
            tumblr,
            vimeo,
          },
          {
            where: { id: id },
            returning: true,
            plain: true,
          }
        );

        console.log("MAPPING MAPPING", mapping);

        user = await User.findOne({
          where: { id: user_id },
          include: [
            {
              model: Mapping,
              as: "mapping",
            },
          ],
        });

        const data = {
          user_id,
          professional,
        };

        await updateUser(user_id, data);

        return res.status(200).json(destructureUser(user));
      } catch (err) {
        console.log(err);

        return res.status(422).json({
          message: "An error has occurred while creating mapping.",
        });
      }
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
