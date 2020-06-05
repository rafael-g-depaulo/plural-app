const Sequelize = require("sequelize");
const dbConfig = require("./database");

const User = require("../models/User");
const Mapping= require("../models/Mapping");

const connection = new Sequelize(dbConfig);

User.init(connection);
Mapping.init(connection);
Mapping.associate(connection.models);
User.associate(connection.models);

module.exports = connection;
