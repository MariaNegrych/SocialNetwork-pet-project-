const authRouter = require('express').Router();

const {authController: {authUser, refreshToken}} = require('../../controllers');
const {
    authMiddleware: {checkRefreshToken},
    userMiddleware: {emailPasswordValidator, checkIsUserExistByEmail}
} = require('../../middlewares');


authRouter.post('/', emailPasswordValidator, checkIsUserExistByEmail, authUser);
authRouter.post('/refresh', checkRefreshToken, refreshToken);

module.exports = authRouter;
