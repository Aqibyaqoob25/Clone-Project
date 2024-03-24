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
        attributes: ["userId", "firstName", "sirName", "Email"],
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

  getUserByEmail: async (Email) => {
    try {
      const gettedUserByEmail = await models.users.findOne({
        where: {
          Email: Email,
        },
      });
      return {
        response: gettedUserByEmail,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
};
