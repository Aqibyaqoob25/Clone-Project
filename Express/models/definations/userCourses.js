const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class USERCOURSE extends Model {}
USERCOURSE.init(
  {
    userCourseId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = USERCOURSE;
