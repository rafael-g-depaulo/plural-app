"use strict";

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("users", "email", {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      }),
      queryInterface.addColumn("users", "password", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("users", "phone_number", {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      }),
      queryInterface.addColumn("users", "birthdate", {
        type: Sequelize.DATE,
      }),
      queryInterface.addColumn("users", "name", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("users", "city", {
        type: Sequelize.STRING,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("users", "email"),
      queryInterface.removeColumn("users", "password"),
      queryInterface.removeColumn("users", "phone_number"),
      queryInterface.removeColumn("users", "birthdate"),
      queryInterface.removeColumn("users", "name"),
      queryInterface.removeColumn("users", "city"),
    ]);
  },
};
