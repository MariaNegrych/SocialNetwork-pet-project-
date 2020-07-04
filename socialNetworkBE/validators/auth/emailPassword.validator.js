const Joi = require('joi');

const {regexpEnum: {email, password}} = require('../../constants');

module.exports = Joi.object({
  email: Joi.string().trim().regex(email).required(),
  password: Joi.string().trim().regex(password).required()
});
