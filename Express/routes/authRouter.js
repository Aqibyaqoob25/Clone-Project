const routes = require("express").Router();
const { login, logout } = require("../controllers/authControllers");

routes.post("/login", login);
routes.get("/logout", logout);
module.exports = routes;
