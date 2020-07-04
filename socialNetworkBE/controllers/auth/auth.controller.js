const {
    passwordHasherHelper: {comparePassword},
    tokenGeneratorHelper: {tokinizer}
} = require('../../helpers');
const {ErrorHandler, customErrors: {BAD_REQUEST_USER_PASSWORD_INVALID, NOT_FOUND: NOT_FOUND_CUSTOM}} = require('../../errors');
const {
    responseStatusCodesEnum: {NOT_FOUND, BAD_REQUEST},
    actionEnum: {USER_AUTH, USER_REFRESH},
    requestHeadersEnum: {AUTHORIZATION}
} = require('../../constants');
const {authService} = require('../../services');


class AuthController {
    async authUser(req, res, next) {
        try {
            const {id, password} = req.user;
            const authInfo = req.body;
            const isPasswordEquals = await comparePassword(authInfo.password, password);

            if (!isPasswordEquals) return next(new ErrorHandler(BAD_REQUEST_USER_PASSWORD_INVALID.message, BAD_REQUEST, BAD_REQUEST_USER_PASSWORD_INVALID.code));

            const tokenPair = tokinizer(USER_AUTH);

            await authService.createTokenPair({
                userId: id,
                ...tokenPair
            });

            res.json(tokenPair);
        } catch (e) {
            return next(e);
        }
    }

    async refreshToken(req, res, next) {
        try {
            const refresh_token = req.get(AUTHORIZATION);
            const {user} = req.user;

            if (!user) {
                return next(new ErrorHandler(NOT_FOUND_CUSTOM.message, NOT_FOUND, NOT_FOUND_CUSTOM.code));
            }

            const tokenPair = tokinizer(USER_REFRESH);

            await authService.deleteTokenPairByParams({refresh_token});
            await authService.createTokenPair({
                userId: user.id,
                ...tokenPair
            });

            res.json(tokenPair);
        } catch (e) {
            return next(e);
        }
    }
}

module.exports = new AuthController();
