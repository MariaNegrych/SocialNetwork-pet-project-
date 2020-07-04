const Joi = require('joi');

const {authValidator: {emailPasswordValidator}} = require('../../validators');
const {ErrorHandler} = require('../../errors');
const {responseStatusCodesEnum: {BAD_REQUEST}} = require('../../constants');

module.exports = (req, res, next) => {
  const {error} = Joi.validate(req.body, emailPasswordValidator);

  if (error) return next(new ErrorHandler(error.details[0].message, BAD_REQUEST));

  next();
};
