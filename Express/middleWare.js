const { verify } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  middleWare: (req, res, next) => {
    try {
      if (req.cookies.token == null || undefined) {
        return res.send({ error: "unauthorised user" });
      }
      verify(req.cookies.token, process.env.SECRET, (error, user) => {
        console.log("user", user);
        if (error) {
          return res.send({ error: "unauthorised user" });
        }
        next();
      });
    } catch (error) {
      return res.send({ error: message });
    }
  },
};
