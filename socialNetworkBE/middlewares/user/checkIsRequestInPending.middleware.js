const {userService} = require('../../services');
const {customErrors, ErrorHandler} = require('../../errors');
const {responseStatusCodesEnum: {BAD_REQUEST}, userStatusEnum: {PENDING}} = require('../../constants');

module.exports = async (req, res, next) => {
    const {userId} = req.params;
    const {user} = req.user;
    const requests = await userService.getRequestFromUserByParams(user.id, +userId, {statusId: PENDING.id});

    if (!requests) return next(new ErrorHandler(
        customErrors.BAD_REQUEST_INVITE_NOT_IN_PENDING.message,
        BAD_REQUEST,
        customErrors.BAD_REQUEST_INVITE_NOT_IN_PENDING.code)
    );

    next();
};

