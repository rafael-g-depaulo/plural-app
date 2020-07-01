const es = require("elasticsearch");

const esClient = new es.Client({
  // host: "localhost:9200",
   host: process.env.ELASTIC_URL,
   log: "trace",
});

esClient.ping({
  requestTimeout: 30000,
}, (error) => {
  if(error) {
    console.error('elasticsearch cluster is down')
  } else {
    console.log('all is well')
  }
})
 
module.exports = esClient;
