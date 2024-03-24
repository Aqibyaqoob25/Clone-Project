const joi = require("joi");
const { login } = require("../servise/authService");

const loginSchema = joi.object().keys({
  Email: joi.string().min(1).required(),
  password: joi.string().required(),
});
module.exports = {
  login: async (req, res) => {
    const validate = await loginSchema.validateAsync(req.body);
    const isLogin = await login(validate);
    try {
      if (isLogin.error) {
        res.send({
          error: isLogin.error,
        });
      }
      res.cookie("cookie", isLogin.response, {
        maxAge: 360000,
        httpOnly: true,
      });
      return res.send({
        response: true,
      });
    } catch (error) {
      res.send({
        message: "Error while logged in",
        error: error.message,
      });
    }
  },
  logout: (req, res) => {
    res.send({
      message: "You successfully logout",
    });
  },
};
