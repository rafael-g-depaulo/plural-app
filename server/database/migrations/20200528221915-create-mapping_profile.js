'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('mappings',{
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'users', key: 'id'},
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
        },
        artistic_name:{
          type: Sequelize.STRING,
        },
        short_biography:{
          type: Sequelize.STRING,
        },
        long_bio:{
          type: Sequelize.TEXT,
        },
        sexual_orientation:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        gender_orientation:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        professional:{
          type: Sequelize.ARRAY(Sequelize.STRING),
        },
        art_category:{
          type: Sequelize.ARRAY(Sequelize.STRING),
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      }
      
      );
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('mapping');
    
  }
};
