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
        active: DataTypes.BOOLEAN
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.hasOne(models.Mapping, { foreignKey: 'user_id', as: "mapping" })
  }
}

module.exports = User;
