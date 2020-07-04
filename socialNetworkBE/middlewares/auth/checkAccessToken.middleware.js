const {
  responseStatusCodesEnum: {BAD_REQUEST, NOT_FOUND},
  requestHeadersEnum: {AUTHORIZATION},
  actionEnum: {USER_AUTH}
} = require('../../constants');
const {ErrorHandler, customErrors: {NOT_FOUND: NOT_FOUND_CUSTOME, BAD_REQUEST_NO_TOKEN}} = require('../../errors');
const {authService} = require('../../services');
const {tokenVerificatorHelper: {tokenVerificator}} = require('../../helpers');

module.exports = async (req, res, next) => {
  try {
    const token = req.get(AUTHORIZATION);

    if (!token) return next(new ErrorHandler(BAD_REQUEST_NO_TOKEN.message, BAD_REQUEST, BAD_REQUEST_NO_TOKEN.code));

    await tokenVerificator(USER_AUTH, token);

    const userByToken = await authService.findUserByToken({access_token: token});

    if (!userByToken) return next(new ErrorHandler(NOT_FOUND_CUSTOME.message, NOT_FOUND, NOT_FOUND_CUSTOME.code));

    req.user = userByToken;

    next();
  } catch (e) {
    return next(e);
  }
};
