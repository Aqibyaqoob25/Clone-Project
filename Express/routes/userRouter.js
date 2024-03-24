const routes = require("express").Router();
const {
  createUser,
  getAllUser,
  deleteUser,
  recoverUser,
  updateUser,
} = require("../controllers/userControllers");
const { middleWare } = require("../middleWare");

routes.post("/createUser", createUser);
routes.get("/getAlluser", getAllUser);
routes.get("/getAlluser", middleWare, getAllUser);
routes.delete("/deleteUser", deleteUser);
routes.put("/recoverUsers", recoverUser);
routes.patch("/updateUser", updateUser);

module.exports = routes;
