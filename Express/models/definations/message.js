const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class MESSAGE extends Model {}

MESSAGE.init(
  {
    senderId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
    name: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    lastMessage: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = MESSAGE;
