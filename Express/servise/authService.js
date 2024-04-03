const {
  getUserByEmail,
  createSession,
  getSession,
  updateSession,
} = require("../models/userModels");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { v4: uuid } = require("uuid");
require("dotenv").config();

module.exports = {
  login: async (body) => {
    try {
      const user = await getUserByEmail(body.email);

      if (user.error || user.response == null) {
        return { error: "Invalid email or password" };
      }

      const isValid = await compare(
        body.password,
        user.response.dataValues.password
      );
      if (!isValid) {
        return { error: "Incorrect password" };
      }
      delete user.response.dataValues.password;
      const jwt = sign(user, process.env.SECRET, { expiresIn: "1h" });

      const obj = {
        sessionId: uuid(),
        token: jwt,
        userId: user.response.dataValues.userId,
      };

      const isSession = await getSession(obj.userId);

      if (isSession.error) {
        return {
          error: "invalid crendtials",
        };
      }
      if (isSession.response) {
        const Session = await updateSession(obj);
        if (Session.error) {
          return {
            error: "invalid crendtials",
          };
        }
        return { response: jwt };
      } else {
        const Session = await createSession(obj);
        if (Session.error) {
          return {
            error: "invalid crendtials",
          };
        }
      }
      return { response: jwt };
    } catch (error) {
      return { error: error.message };
    }
  },
  //   logout: () => {},
};
