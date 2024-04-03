const {
  createPost,
  getAllPost,
  deletePost,
  recoverPost,
  updatePost,
} = require("../controllers/postControllers");

const routes = require("express").Router();

routes.post("/createPost", createPost);
routes.get("/getAllPost", getAllPost);
routes.delete("/deletePost", deletePost);
routes.put("/recoverPost", recoverPost);
routes.patch("/updatePost", updatePost);
module.exports = routes;
