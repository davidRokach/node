const Joi = require("Joi");

const loginValidation = (user) => {
  const schema = Joi.object({
    email: Joi.string()
      .ruleset.regex(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
      .rule({ message: "email mast be a valid email" }),
    password: Joi.string()
      .ruleset.regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-]).{7,}/)
      .rule({
        message:
          "Password must have at least seven characters including an uppercase letter, a lowercase letter, a number and one of the following symbols: !@#$%^&*-",
      }),
  });

  return schema.validate(user);
};

exports.loginValidation = loginValidation;
