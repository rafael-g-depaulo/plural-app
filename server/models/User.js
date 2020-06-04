const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        provider_id: DataTypes.STRING,
        provider: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        birthdate: DataTypes.DATE,
        city: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        name: DataTypes.STRING,
      },
      { sequelize }
    );
  }
}

module.exports = User;
