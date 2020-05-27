const esClient = require("../client");

const insertUser = async function (_id, jobs) {
  return await esClient.index({
    index: "user",
    type: "userjobs",
    id: _id,
    body: jobs,
  });
};
module.exports = insertUser;

const searchUsers = async function (jobs) {
  return await esClient.search({
    index: "user",
    type: "userjobs",
    query: {
      match_phrase_prefix: {
        job: job,
      },
    },
  });
};
module.exports = searchUsers;

/*
  Exemplo de busca: GET

  const response = await searchUsers(job);
  console.log(response); 
*/

/* 
  Exemplo de inserção: POST
  
  id: 10
  jobs: ["iluminacao", "design", "programador", "musico", "fotografo"]

  const response = await insertUser(id, jobs);
  console.log(response);
*/
