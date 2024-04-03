const {
  createPost,
  getAllPost,
  deletePost,
  recoverPost,
  updatePost,
} = require("../models/postModel");
const { v4: uuid } = require("uuid");
const { recoverUser } = require("../models/userModels");
module.exports = {
  createPost: async (body) => {
    try {
      const post = {
        postId: uuid(),
        author: body.author,
        content: body.content,
      };
      const createdPost = await createPost(post);
      if (createdPost.error) {
        return { error: createdPost.error };
      }

      return {
        response: createdPost.response,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  getAllPost: async () => {
    try {
      const gettedPost = await getAllPost();
      if (gettedPost.error) {
        return { error: gettedPost.error };
      }

      return {
        response: gettedPost.response,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  deletePost: async (query) => {
    try {
      const deletedPost = await deletePost(query.postId);
      if (deletedPost.error) {
        return {
          error: deletedPost.error,
        };
      }
      return {
        response: deletedPost.response,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  recoverPost: async () => {
    try {
      const recoveredPost = await recoverPost();
      if (recoveredPost.error) {
        return { error: recoveredPost.error };
      }
      return {
        response: recoveredPost.response,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  updatePost: async (body) => {
    try {
      const updatedPost = await updatePost(body, body.postId);
      if (updatedPost.error) {
        return { error: updatedPost.error };
      }
      return {
        response: updatedPost.response,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
};
