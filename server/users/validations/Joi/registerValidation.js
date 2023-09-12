const Joi = require("Joi");

const registerValidation = (user) => {
  const urlRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

  const schema = Joi.object({
    name: Joi.object().keys({
      first: Joi.string().min(2).max(256).required(),
      middle: Joi.string().min(2).max(256).allow("").optional(),
      last: Joi.string().min(2).max(256).required(),
    }),
    isBusiness: Joi.boolean().required(),
    phone: Joi.string()
      .ruleset.regex(/\+?(972|0)(-)?(\d{2}(-)?\d{7}|\d{2}(-)?\d{3}(-)?\d{4})/)
      .rule({ message: "phone mast be a valid phone" })
      .required(),
    email: Joi.string()
      .ruleset.regex(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
      .rule({ message: "email mast be a valid email" }),
    password: Joi.string()
      .ruleset.regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-]).{7,}/)
      .rule({
        message:
          "Password must have at least nine characters including an uppercase letter, a lowercase letter, a number and one of the following symbols: !@#$%^&*-",
      }),
    image: Joi.object().keys({
      url: Joi.string()
        .ruleset.regex(urlRegex)
        .rule({ message: 'card.image "url" mast be a valid url' })
        .optional(),
      alt: Joi.string().min(2).max(256).allow("").optional(),
    }),
    address: Joi.object().keys({
      state: Joi.string().min(2).max(256).allow("").optional(),
      country: Joi.string().min(2).max(256).required(),
      city: Joi.string().min(2).max(256).required(),
      street: Joi.string().min(2).max(256).required(),
      houseNumber: Joi.number(),
      zip: Joi.number(),
    }),
  });

  return schema.validate(user);
};

exports.registerValidation = registerValidation;
