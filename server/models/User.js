const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        provider_id: DataTypes.STRING,
        provider: DataTypes.STRING,
      },
      { sequelize }
    ); 
  }
}

module.exports = User;
