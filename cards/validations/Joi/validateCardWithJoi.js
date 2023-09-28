const Joi = require("Joi");

const validateCardWithJoi = (card) => {
  const urlRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

  const schema = Joi.object({
    title: Joi.string().min(2).max(256).required(),
    subtitle: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(1024).required(),
    phone: Joi.string()
      .ruleset.regex(/\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})/)
      .rule({ message: "phone mast be a valid phone" })
      .required(),
    web: Joi.string()
      .ruleset.regex(urlRegex)
      .rule({ message: 'web.url "url" mast be a valid url' }),
    email: Joi.string()
      .ruleset.regex(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
      .rule({ message: "email mast be a valid email" }),
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
    bizNumber: Joi.number().allow("").optional(),
    user_id: Joi.string().allow("").optional(),
  });

  return schema.validate(card);
};

exports.validateCardWithJoi = validateCardWithJoi;