const Joi = require('joi');

const {regexpEnum: {password, email}} = require('../../constants');

module.exports = Joi.object({
  name: Joi.string().trim().min(2).max(25).required(),
  surname: Joi.string().trim().min(2).max(50).required(),
  email: Joi.string().trim().regex(email).required(),
  password: Joi.string().trim().regex(password).required()
});
