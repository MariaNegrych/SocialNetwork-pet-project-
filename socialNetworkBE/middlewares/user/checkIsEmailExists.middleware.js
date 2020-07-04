const {responseStatusCodesEnum: {BAD_REQUEST}} = require('../../constants');
const {ErrorHandler, customErrors} = require('../../errors');
const {userService} = require('../../services');

module.exports = async (req, res, next) => {
    const {email} = req.body;
    const userByEmail = await userService.findOneByParams({email});

    if (userByEmail) return next(new ErrorHandler(
        customErrors.BAD_REQUEST_USER_REGISTERED.message,
        BAD_REQUEST,
        customErrors.BAD_REQUEST_USER_REGISTERED.code
    ));

    next();
};
