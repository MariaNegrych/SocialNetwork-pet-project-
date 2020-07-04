const jwt = require('jsonwebtoken');
const {promisify} = require('util');

const {
    responseStatusCodesEnum: {SERVER, UNAUTHORIZED},
    actionEnum: {USER_AUTH, USER_REFRESH}
} = require('../constants');
const {ErrorHandler, customErrors: {UNAUTHORIZED_BAD_TOKEN}} = require('../errors');
const {configs: {JWT_SECRET, JWT_REFRESH_SECRET}} = require('../configs');

const verifyPromise = promisify(jwt.verify);

module.exports.tokenVerificator = async (action, token) => {
    try {
        let isValid;

        switch (action) {
            case USER_AUTH:
                isValid = await verifyPromise(token, JWT_SECRET);
                break;

            case USER_REFRESH:
                isValid = await verifyPromise(token, JWT_REFRESH_SECRET);
                break;

            default:
                throw new ErrorHandler('wrong Action type', SERVER);
        }

        return isValid;
    } catch (e) {
        throw new ErrorHandler(UNAUTHORIZED_BAD_TOKEN.message, UNAUTHORIZED, UNAUTHORIZED_BAD_TOKEN.code);
    }
};
