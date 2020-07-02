const es = require("elasticsearch");

const { ELASTIC_URL = "http://localhost:9200/" } = process.env

const esClient = new es.Client({
  host: ELASTIC_URL,
  log: "trace",
});

module.exports = esClient;