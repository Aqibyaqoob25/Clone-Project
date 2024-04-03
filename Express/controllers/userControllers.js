const {
  createUser,
  getAllUser,
  deleteUser,
  recoverUser,
  updateUser,
} = require("../servise/userService");

const joi = require("joi");

const createUserSchema = joi.object().keys({
  firstName: joi.string().required(),
  sirName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  day: joi.string().required(),
  month: joi.string().required(),
  year: joi.string().required(),
});

const deleteUserSchema = joi.object().keys({
  userId: joi.array().required(),
});

const updateUserSchema = joi.object().keys({
  userId: joi.string(),
  userName: joi.string(),
});
module.exports = {
  createUser: async (req, res) => {
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      const createdUser = await createUser(validate);
      if (createdUser.error) {
        return res.send({
          error: createdUser.error,
        });
      }
      return res.send({
        response: createdUser.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const allusers = await getAllUser();
      if (allusers.error) {
        return res.send({
          error: allusers.error,
        });
      }
      return res.send({
        response: allusers.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const validate = await deleteUserSchema.validateAsync(req.query);
      const deletedUser = await deleteUser(validate);
      if (deletedUser.error) {
        return res.send({
          error: deletedUser.error,
        });
      }
      return res.send({
        response: deletedUser.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  recoverUser: async (req, res) => {
    try {
      const recoveredUser = await recoverUser();
      if (recoveredUser.error) {
        return res.send({
          error: recoveredUser.error,
        });
      }
      return res.send({
        response: recoveredUser.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const validate = await updateUserSchema.validateAsync(req.body);
      const updatedUser = await updateUser(validate);
      if (updatedUser.error) {
        return res.send({ error: updatedUser.error });
      }
      return res.send({
        response: updatedUser.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
};
