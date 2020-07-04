const {userService} = require('../../services');
const {customErrors, ErrorHandler} = require('../../errors');
const {responseStatusCodesEnum: {NOT_FOUND}} = require('../../constants');

module.exports = async (req, res, next) => {
    const {userId} = req.params;
    const {user} = req.user;

    if(+userId === user.id) return next(new ErrorHandler(customErrors.NOT_FOUND.message, NOT_FOUND, customErrors.NOT_FOUND.code));

    const userFromDB = await userService.findOneByParams({id: userId});

    if (!userFromDB) return next(new ErrorHandler(customErrors.NOT_FOUND.message, NOT_FOUND, customErrors.NOT_FOUND.code));

    req.userToAdd = userFromDB;

    next();
};

