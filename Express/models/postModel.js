const { models } = require("./index");
const { Op } = require("sequelize");

module.exports = {
  createPost: async (body) => {
    try {
      const post = await models.post.create({ ...body });
      return { response: post };
    } catch (error) {
      return { error: error.message };
    }
  },
  getAllPost: async () => {
    try {
      const post = await models.post.findAll();
      return { response: post };
    } catch (error) {
      return { error: error.message };
    }
  },
  deletePost: async (postId) => {
    try {
      const deletedPost = await models.post.destroy({
        where: {
          postId: postId,
        },
      });

      return {
        response: deletedPost,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  recoverPost: async () => {
    try {
      const recoveredPost = await models.post.update(
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
        response: recoveredPost,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  updatePost: async (body, postId) => {
    try {
      const updatedPost = await models.post.update(
        {
          ...body,
        },
        {
          where: {
            postId: postId,
          },
        }
      );
      return {
        response: updatedPost,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
};
