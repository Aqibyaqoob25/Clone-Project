const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Friend extends Model {}
Friend.init(
  {
    friendId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
    name: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = Friend;
