const Joi = require('joi');

const {responseStatusCodesEnum: {BAD_REQUEST}} = require('../../constants');
const {userValidator: {newUserValidator}} = require('../../validators');
const {ErrorHandler, customErrors: {BAD_REQUEST_USER_IS_NOT_VALID}} = require('../../errors');

module.exports = (req, res, next) => {
    const {error} = Joi.validate(req.body, newUserValidator);

    if (error) return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, BAD_REQUEST_USER_IS_NOT_VALID.code));

    next();
};
