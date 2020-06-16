"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        "users", // table name
        "active", // new field name
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'active'),
    ]);
  },
};
