const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class COURSES extends Model {}

COURSES.init(
  {
    courseId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
    courseName: {
      unique: true,
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
module.exports = COURSES;
