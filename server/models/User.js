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

  static associate(models) {
    this.hasOne(models.Mapping, { foreignKey: 'user_id', as: "mapping" })
  }
}

module.exports = User;
