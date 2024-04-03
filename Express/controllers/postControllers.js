const {
  createPost,
  getAllPost,
  deletePost,
  recoverPost,
  updatePost,
} = require("../servise/postService");

const joi = require("joi");

const createPostSchema = joi.object().keys({
  author: joi.string().required(),
  content: joi.string().required(),
});
const deletePostSchema = joi.object().keys({
  postId: joi.string().required(),
});

const updatePostSchema = joi.object().keys({
  postId: joi.string().required(),
  author: joi.string().required(),
});

module.exports = {
  createPost: async (req, res) => {
    try {
      const validate = await createPostSchema.validateAsync(req.body);
      const createdPost = await createPost(validate);
      if (createdPost.error) {
        return res.send({
          error: createdPost.error,
        });
      }
      return res.send({
        response: createdPost.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  getAllPost: async (req, res) => {
    try {
      const allPosts = await getAllPost();
      if (allPosts.error) {
        return res.send({
          error: allPosts.error,
        });
      }
      return res.send({
        response: allPosts.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  deletePost: async (req, res) => {
    try {
      const validate = await deletePostSchema.validateAsync(req.query);
      const deletedPost = await deletePost(validate);

      if (deletedPost.error) {
        return res.send({
          error: deletedPost.error,
        });
      }
      return res.send({
        response: deletedPost.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  recoverPost: async (req, res) => {
    try {
      const recoveredPost = await recoverPost();
      if (recoveredPost.error) {
        return res.send({
          error: recoveredPost.error,
        });
      }
      return res.send({
        response: recoveredPost.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  updatePost: async (req, res) => {
    try {
      const validate = await updatePostSchema.validateAsync(req.body);
      const updatedPost = await updatePost(validate);
      if (updatedPost.error) {
        return res.send({ error: updatedPost.error });
      }
      return res.send({
        response: updatedPost.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
};
