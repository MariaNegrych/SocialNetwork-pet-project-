const {userService} = require('../../services');
const {customErrors, ErrorHandler} = require('../../errors');
const {responseStatusCodesEnum: {NOT_FOUND}} = require('../../constants');

module.exports = async (req, res, next) => {
    const {friendId} = req.params;
    const friendToAdd = await userService.findOneByParams({id: friendId});

    if (!friendToAdd) return next(new ErrorHandler(customErrors.NOT_FOUND, NOT_FOUND.message));

    req.friendToAdd = friendToAdd;

    next();
};

