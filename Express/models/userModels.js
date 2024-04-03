const { models } = require("./index");
const { Op } = require("sequelize");

module.exports = {
  createUser: async (body) => {
    try {
      const createdUser = await models.users.create({ ...body });
      return { response: createdUser };
    } catch (error) {
      return { error: error.message };
    }
  },

  getAllUser: async () => {
    try {
      const allusers = await models.users.findAll({
        attributes: ["userId", "firstName", "sirName", "email"],
        // include: [
        //   {
        //     model: models.addresses,
        //     attributes: ["address", "addressId"],
        //   },
        //   {
        //     model: models.roles,
        //     attributes: ["roleId", "roleName"],
        //   },
        // ],
      });
      return {
        response: allusers,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  deleteUser: async (userId) => {
    try {
      const deletedUser = await models.users.destroy({
        where: {
          userId: userId,
        },
      });

      return {
        response: deletedUser,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  recoverUser: async () => {
    try {
      const recoveredUsers = await models.users.update(
        {
          deletedAt: null,
        },
        {
          where: {
            deletedAt: { [Op.ne]: null },
          },
          paranoid: false,
        }
      );
      return {
        response: recoveredUsers,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  updateUser: async (body, userId) => {
    try {
      const updatedUser = await models.users.update(
        {
          ...body,
        },
        {
          where: {
            userId: userId,
          },
        }
      );
      return {
        response: updatedUser,
      };
    } catch (error) {
      return { error: error.message };
    }
  },

  getUserByEmail: async (email) => {
    try {
      console.log("data ", email);

      const gettedUserByEmail = await models.users.findOne({
        where: {
          email: email,
        },
      });

      return {
        response: gettedUserByEmail,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  createSession: async (body) => {
    try {
      const session = await models.session.create({
        ...body,
      });

      return {
        response: session,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  getSession: async (userId) => {
    try {
      const session = await models.session.findOne({
        where: {
          userId: userId,
        },
      });
      return {
        response: session,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  updateSession: async (body) => {
    try {
      const session = await models.session.update(
        {
          ...body,
        },
        {
          where: {
            userId: body.userId,
          },
        }
      );

      return {
        response: session,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
};
