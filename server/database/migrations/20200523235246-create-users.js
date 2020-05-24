"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      facebook_id: { type: Sequelize.INTEGER}
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
