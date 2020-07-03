import Router from "express";
import Mapping from "models/Mapping";
import { insertUser, searchUsers } from "elasticsearch/User/userActions";
import AuthMiddleware from "Middlewares/AuthMiddleware";
import multer from "multer";
import util from "util";

const { Storage } = require("@google-cloud/storage");

const gc = new Storage({
  projectId: "plural-282215",
  credentials: {
    private_key: process.env.GCS_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.GCS_CLIENT_EMAIL,
  },
});

const multerMiddleware = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb
  },
});

const bucket = gc.bucket(process.env.GCS_BUCKET);

const sexualOrientationMap = new Map([
  ["lesbica", 1],
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

async function uploadImageToGCS(file) {
  return new Promise((resolve, reject) => {
    // Create a new blob in the bucket and upload the file data.
    const blob = bucket.file(file.originalname);
    const blobStream = blob.createWriteStream();

    blobStream.on("error", (err) => {
      console.log("[ERROR]", err);

      reject("Something went wrong when uploading image");
    });

    blobStream.on("finish", () => {
      const publicUrl = util.format(
        `https://storage.googleapis.com/${bucket.name}/${blob.name}`
      );
      resolve(publicUrl);
    });

    blobStream.end(file.buffer);
  });
}

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
      multerMiddleware.single("file"),
      AuthMiddleware.verifyToken,
      async (req, res) => {
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
        art_category = artCategoryMap.get(art_category);

        let user = await User.findOne({
          where: { id: user_id },
        });

        console.log("Found the following user:", user);

        if (!user) {
          return res.status(400).json({ error: "user not found" + user_id });
        }

        console.log(req.file);

        try {
          let profile_picture =
            req.file !== null && req.file !== undefined
              ? await uploadImageToGCS(req.file)
              : null;

          const mapping = await Mapping.create({
            artistic_name,
            short_biography,
            long_bio,
            sexual_orientation,
            gender_orientation,
            professional,
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

          // await insertUser(user_id, data);

          return res.status(200).json(destructureUser(user));
        } catch (err) {
          console.log(err);

          return res.status(422).json({
            message: "An error has occurred while creating mapping.",
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
