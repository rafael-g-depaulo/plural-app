const esClient = require("../client");

export async function insertUser(id, data) {
  console.log("insertUser", id, data);
  return await esClient.index({
    index: "mapping",
    id: id,
    body: data,
  });
}

export async function searchUsers(jobs) {
  return await esClient.search({
    index: "user",
    type: "userjobs",
    query: {
      match_phrase_prefix: {
        job: job,
      },
    },
  });
}

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
