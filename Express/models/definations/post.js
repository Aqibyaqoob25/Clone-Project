const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class POST extends Model {}
POST.init(
  {
    postId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
    author: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    content: {
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
module.exports = POST;
