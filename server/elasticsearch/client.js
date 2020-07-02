const es = require("elasticsearch");

const esClient = new es.Client({
  //host: "localhost:9200",
  // host: process.env.ELASTIC_URL,
  host: "https://p9swk6ub1h:9gkkkz71qs@ash-427947896.us-east-1.bonsaisearch.net:443",
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
