const {userService} = require('../../services');
const {customErrors, ErrorHandler} = require('../../errors');
const {responseStatusCodesEnum: {NOT_FOUND}, userStatusEnum: {FRIEND}} = require('../../constants');

module.exports = async (req, res, next) => {
    const {user} = req.user;
    const {friendId} = req.params;

    const friend = await userService.getRequestFromUserByParams(user.id, +friendId, {statusId: FRIEND.id});

    if (!friend) return next(new ErrorHandler(customErrors.NOT_FOUND.message, NOT_FOUND));

    req.friend = friend;

    next();
};

