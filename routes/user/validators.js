const Joi = require("joi");

const addUserSchema = Joi.object({
  name: Joi.string().required().label("Name"),
  email: Joi.string().email().required().label("Email"),
});

module.exports = {
  addUserSchema,
};
