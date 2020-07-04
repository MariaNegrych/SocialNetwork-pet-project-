const {userService} = require('../../services');
const {customErrors, ErrorHandler} = require('../../errors');
const {responseStatusCodesEnum: {NOT_FOUND}} = require('../../constants');

module.exports = async (req, res, next) => {
    const {userId} = req.params;
    const {user} = req.user;

    const relations = await userService.getRelationsWithUser(user.id, +userId);

    if (relations) return next(new ErrorHandler(customErrors.BAD_REQUEST_USER_HAS_RELATIONS.message, NOT_FOUND, customErrors.BAD_REQUEST_USER_HAS_RELATIONS.code));

    next();
};

