const sequelize = require("../bin/dbConnection");

const users = require("./definations/user");
const friends = require("./definations/friends");
const message = require("./definations/message");
const post = require("./definations/post");
const session = require("./definations/session");

//relations start here
users.hasMany(friends, { foreignKey: "userId" });
friends.belongsTo(users, { foreignKey: "userId" });

users.hasMany(message, { foreignKey: "senderId" });
message.belongsTo(users, { foreignKey: "senderId" });

users.hasMany(post, { foreignKey: "userId" });
post.belongsTo(users, { foreignKey: "userId" });
//relations end here

//session relation
users.hasOne(session, { foreignKey: "userId" }, { unique: true });
session.belongsTo(users, { foreignKey: "userId" }, { unique: true });

const models = { users, message, friends, post, session };
const db = {};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
