const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class ROLES extends Model {}
ROLES.init(
  {
    roleId: {
      primaryKey: true,  
      type: DataTypes.STRING(),
    },
    roleName: {
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
module.exports = ROLES;
