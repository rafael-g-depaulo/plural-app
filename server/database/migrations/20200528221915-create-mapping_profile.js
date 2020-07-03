"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("mappings", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      artistic_name: {
        type: Sequelize.STRING,
      },
      short_biography: {
        type: Sequelize.STRING,
      },
      long_bio: {
        type: Sequelize.TEXT,
      },
      sexual_orientation: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gender_orientation: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      professional: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      art_category: {
        type: Sequelize.INTEGER,
      },
      ethnicity: {
        type: Sequelize.INTEGER,
      },
      profile_picture: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      facebook: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      spotify: {
        type: Sequelize.STRING
      },
      linkedin: {
        type: Sequelize.STRING
      },
      vimeo: {
        type: Sequelize.STRING
      },
      deezer: {
        type: Sequelize.STRING
      },
      tiktok: {
        type: Sequelize.STRING
      },
      youtube: {
        type: Sequelize.STRING
      },
      tumblr: {
        type: Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("mappings");
  },
};
