const joi = require("joi");
const { login } = require("../servise/authService");

const loginSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});
module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      const isLogin = await login(validate);
      if (isLogin.error) {
        return res.send({
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
      return res.send({
        message: "Error while logged in",
        error: error.message,
      });
    }
  },
  logout: (req, res) => {
    return res.send({
      message: "You successfully logout",
    });
  },
};
