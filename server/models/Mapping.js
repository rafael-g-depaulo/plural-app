const { Model, DataTypes } = require("sequelize");

class Mapping extends Model {
  static init(sequelize) {
    super.init(
      {
        artistic_name: DataTypes.STRING,
        short_biography: DataTypes.STRING,
        long_bio: DataTypes.TEXT,
        sexual_orientation: DataTypes.INTEGER,
        gender_orientation: DataTypes.INTEGER,
        professional: DataTypes.ARRAY(DataTypes.STRING),
        art_category: DataTypes.ARRAY(DataTypes.STRING),
        profile_picture: DataTypes.STRING,
        ethnicity: DataTypes.STRING,
        facebook: DataTypes.STRING,
        instagram: DataTypes.STRING,
        linkedin: DataTypes.STRING,
        youtube: DataTypes.STRING,
        twitter: DataTypes.STRING,
        spotify: DataTypes.STRING,
        deezer: DataTypes.STRING,
        tiktok: DataTypes.STRING,
        tumblr: DataTypes.STRING,
        vimeo: DataTypes.STRING,
      },
      { sequelize, tableName: "mappings", underscored: true }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = Mapping;
