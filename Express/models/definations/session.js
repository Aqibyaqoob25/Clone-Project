const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class SESSION extends Model {}
SESSION.init(
  {
    sessionId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },

    token: {
      unique: true,
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = SESSION;
