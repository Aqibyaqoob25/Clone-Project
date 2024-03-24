const {
  createUser,
  getAllUser,
  deleteUser,
  recoverUser,
  updateUser,
  getUserByEmail,
} = require("../models/userModels");

const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");

module.exports = {
  createUser: async (body) => {
    try {
      const isUser = await getUserByEmail(body.Email);
      if (isUser.error || isUser.response) {
        return { response: "user with this email already exist" };
      }
      const user = {
        userId: uuid(),
        firstName: body.firstName,
        sirName: body.sirName,
        Email: body.Email,
        password: await hash(body.password, 10),
      };
      const createdUser = await createUser(user);
      if (createdUser.error) {
        return { error: createdUser.error };
      }
      delete createdUser.response.dataValues.password;
      return {
        response: createdUser.response,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  getAllUser: async () => {
    try {
      const allusers = await getAllUser();
      if (allusers.error) {
        return {
          error: allusers.error,
        };
      }
      return { response: allusers.response };
    } catch (error) {
      return { error: error.message };
    }
  },
  deleteUser: async (query) => {
    try {
      const deletedUser = await deleteUser(query.userId);
      if (deletedUser.error) {
        return {
          error: deletedUser.error,
        };
      }
      return {
        response: deletedUser.response,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  recoverUser: async () => {
    try {
      const recoveredUser = await recoverUser();
      if (recoveredUser.error) {
        return { error: recoveredUser.error };
      }
      return {
        response: recoveredUser.response,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  updateUser: async (body) => {
    try {
      const updatedUser = await updateUser(body, body.userId);
      if (updatedUser.error) {
        return { error: updatedUser.error };
      }
      return {
        response: updatedUser.response,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
};
