const esClient = require("../client");

export async function insertUser(id, data) {
  console.log("insertUser", id, data);
  return await esClient.index({
    index: "mapping",
    type: "mytype",
    id: id,
    body: data
  });
}

export async function searchUsers(job) {
  return await esClient.search({
    index: "mapping",
    body: job,
  });
}

export async function getUser(id){
  return await esClient.get({
    index: "mapping",
    id: id,
  })
}

export async function updateUsers(id, data){
  return await esClient.update({
    id: id,
    type: "mytype",
    index: "mapping",
    body: {
      doc: data
    },
  })
}


/*
## GET USER BY ID ##

const id = "10"
const response = getUser(id)
console.log(response) 
*/

/* 
  ### UPDATE USER ###

  const id = "10"
  const data = {
    jobs: ["reactjs", "nodejs", "express"]
  } 

  const response = updateUsers(id, data);
  console.log(response);
 */

/*
  ## GET USERS BY JOBS ##

  const job = {
    query: {
      match_phrase_prefix: {
        jobs: 'progr',
      },
    },
  }
  const response = searchUsers(job)
  console.log(response); 
*/

/*  
  ## POST USER ##

  const id = 2
  const data = {
    id: 2,
    jobs: ["programador", "design"]
  } 

  const response = insertUser(id, data);
  console.log(response); 
*/