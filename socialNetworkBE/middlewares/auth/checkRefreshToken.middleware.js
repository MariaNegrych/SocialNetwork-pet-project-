const {
    responseStatusCodesEnum: {BAD_REQUEST, NOT_FOUND},
    requestHeadersEnum: {AUTHORIZATION},
    actionEnum: {USER_REFRESH}
} = require('../../constants');
const {ErrorHandler, customErrors: {BAD_REQUEST_NO_TOKEN, NOT_FOUND: NOT_FOUND_CUSTOME}} = require('../../errors');
const {authService} = require('../../services');
const {tokenVerificatorHelper: {tokenVerificator}} = require('../../helpers');

module.exports = async (req, res, next) => {
    try {
        const token = req.get(AUTHORIZATION);

        if (!token) return next(new ErrorHandler(BAD_REQUEST_NO_TOKEN.message, BAD_REQUEST, BAD_REQUEST_NO_TOKEN.code));

        await tokenVerificator(USER_REFRESH, token);

        const userByToken = await authService.findUserByToken({refresh_token: token});

        if (!userByToken) return next(new ErrorHandler(NOT_FOUND_CUSTOME.message, NOT_FOUND, NOT_FOUND_CUSTOME.code));

        req.user = userByToken;

        next();
    } catch (e) {
        return next(e);
    }
};
