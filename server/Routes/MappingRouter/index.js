import Router from "express";
import Mapping from "models/Mapping";
import {
  insertUser,
  updateUser,
  searchUsers,
} from "elasticsearch/User/userActions";
import AuthMiddleware from "Middlewares/AuthMiddleware";
import MulterMiddleware, { S3Middleware } from "Middlewares/MulterMiddleware";
import Utils from "utils";

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

const artCategoryMap = new Map([
  ["Artes Cênicas", 1],
  ["Artes Visuais", 2],
  ["Comunicação", 3],
  ["Cinema e Fotografia", 4],
  ["Dança", 5],
  ["Produção e Equipes Técnicas para Projetos Culturais", 6],
  ["Jogos Eletrônicos, APPs e Sites", 7],
  ["Litetura, Influencers e Youtubers", 8],
  ["Moda", 9],
  ["Música", 10],
]);

const ethnicityMap = new Map([
  ["branca", 1],
  ["indígena", 2],
  ["negra (preta ou parda-afro-descendente)", 3],
  ["amarela (de ascendência asiática)", 4],
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
    .post(
      "/users/mapping",
      MulterMiddleware.single("file"),
      AuthMiddleware.verifyToken,
      async (req, res) => {
        console.log("got here")
        const user_id = req.decoded.user.id;

        let {
          artistic_name,
          short_biography,
          long_bio,
          sexual_orientation,
          gender_orientation,
          professional,
          art_category,
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

        sexual_orientation = sexualOrientationMap.get(sexual_orientation);
        gender_orientation = genderMap.get(gender_orientation);
        art_category = art_category?.split(","); // .map(category => artCategoryMap.get(category))
        ethnicity = ethnicityMap.get(ethnicity);

        let user = await User.findOne({
          where: { id: user_id },
        });

        console.log("Found the following user:", user?.dataValues);

        if (!user) {
          return res.status(400).json({ error: "user not found" + user_id });
        }

        try {
          const getProfilePicPromise = () => Utils
            .uploadImage(req)
            .catch(err => { console.log(`[${new Date()}] ERROR IN FILE UPLOAD: ${err}`); return "" })

          const profile_picture = !!req.file
            ? await getProfilePicPromise()
            : "";
            
          console.log("profile picture is |", profile_picture, "|")

          // if (!profile_picture) return res.status(402).json({err: "error with image"})


          const mapping = await Mapping.create({
            artistic_name,
            short_biography,
            long_bio,
            sexual_orientation,
            gender_orientation,
            professional: professional?.split(","),
            art_category,
            user_id,
            profile_picture,
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
      }
    )
    .put(
      "/users/mapping",
      MulterMiddleware.single("file"),
      AuthMiddleware.verifyToken,
      async (req, res) => {
        const user_id = req.decoded.user.id;

        let {
          long_bio,
          sexual_orientation,
          gender_orientation,
          professional,
          art_category,
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

        sexual_orientation = sexualOrientationMap.get(sexual_orientation);
        gender_orientation = genderMap.get(gender_orientation);
        art_category = art_category?.split(","); // .map(category => artCategoryMap.get(category))
        professional = professional?.split(","); // .map(category => artCategoryMap.get(category))
        ethnicity = ethnicityMap.get(ethnicity);

        let user = await User.findOne({
          where: { id: user_id },
          include: [
            {
              model: Mapping,
              as: "mapping",
            },
          ],
        });
        console.log("Found the following user:", user?.dataValues);

        if (!user) {
          return res.status(400).json({ error: "user not found" + user_id });
        }

        var updatedData = {
          long_bio,
          sexual_orientation,
          gender_orientation,
          professional,
          art_category,
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
        };

        try {
          let profile_picture =
            req.file !== null && req.file !== undefined
              ? await Utils.uploadImage(req)
              : null;

          if (profile_picture !== null) {
            updatedData.profile_picture = profile_picture;
          }

          const mapping = await Mapping.update(updatedData, {
            where: { id: user.mapping.id },
            returning: true,
            plain: true,
          });

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
            message: "An error has occurred while editing mapping.",
          });
        }
      }
    )
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
