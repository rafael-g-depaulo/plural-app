const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(connection) {
    super.init(
      {
        facebook_id: DataTypes.STRING,
      },
      { sequelize }
    );
  }
}

module.exports = User;
