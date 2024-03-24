const sequelize = require("../bin/dbConnection");

const users = require("./definations/user");
const roles = require("./definations/Role");
const addresses = require("./definations/Address");
const courses = require("./definations/courses");
const userCourses = require("./definations/userCourses");

//relations start here
addresses.hasOne(users, { foreignKey: "addressId" });
users.belongsTo(addresses, { foreignKey: "addressId" });

roles.hasMany(users, { foreignKey: "roleId" });
users.belongsTo(roles, { foreignKey: "roleId" });

users.hasMany(userCourses, { foreignKey: "userId" });
userCourses.belongsTo(users, { foreignKey: "userId" });
courses.hasMany(userCourses, { foreignKey: "courseId" });
userCourses.belongsTo(courses, { foreignKey: "courseId" });
//relations end here

const models = { users, roles, addresses, courses, userCourses };
const db = {};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
