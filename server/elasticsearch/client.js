const es = require("elasticsearch");

const esClient = new es.Client({
  // host: "localhost:9200",
  host: "https://raq2d6kggt:o3d11mc7dl@ash-427947896.us-east-1.bonsaisearch.net:443",
  log: "trace",
});

module.exports = esClient;
