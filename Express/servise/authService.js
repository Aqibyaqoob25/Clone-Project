const { compare } = require("bcryptjs");
const { getUserByEmail } = require("../models/userModels");
const { sign } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  login: async (body) => {
    try {
      const user = await getUserByEmail(body.Email);
      if (user.error || user.response == null) {
        return { error: "Invalid credentials" };
      }
      const isValid = await compare(
        body.password,
        user.response.dataValues.password
      );
      if (!isValid) {
        return { error: "Invalid credentials" };
      }
      delete user.response.dataValues.password;
      const jwt = sign(user, process.env.SECRET, { expiresIn: "1h" });
      return { response: jwt };
    } catch (error) {
      return { error: error.message };
    }
  },
  //   logout: () => {},
};
