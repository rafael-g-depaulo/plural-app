const esClient = require("../client");

export async function insertUser(id, data) {
  console.log("insertUser", id, data);
  return await esClient.index({
    index: "mapping",
    id: id,
    body: data,
  });
}

export async function searchUsers(job) {
  return await esClient.search({
    index: "mapping",
    body: job,
  });
}

// async function test() {
//   const body = {
//     query: {
//       match_phrase_prefix: {
//         professional: "Fotografo",
//       },
//     },
//   };
//   try {
//     const resp = await searchUsers(body);
//     console.log(JSON.stringify(resp));
//   } catch (e) {
//     console.log(e);
//   }
// }

// test();

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
