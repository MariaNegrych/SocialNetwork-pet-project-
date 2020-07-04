const userRouter = require('express').Router();

const {
    userController: {
        createUser,
        acceptInvite,
        declineInvite,
        sendRequest,
        getUsers,
        getRequests,
        getFriends,
        searchUsers,
        cancelRequest,
        infoUser,
        removeFriend,
        getInvites,
        getUserStatuses
    }
} = require('../../controllers');
const {
    userMiddleware: {
        isUserValid,
        checkIsEmailExists,
        checkIsFriendForUser,
        checkIsUserToAddExistById,
        checkIsRelationsBetweenUsers,
        checkIsRequestInPending,
        checkIsInviteInPending
    },
    authMiddleware: {checkAccessToken}
} = require('../../middlewares');

userRouter.get('/', checkAccessToken, getUsers);
userRouter.get('/userInfo', checkAccessToken, infoUser);
userRouter.post('/', isUserValid, checkIsEmailExists, createUser);

userRouter.get('/user/friends', checkAccessToken, getFriends);
userRouter.post('/:friendId/removeFriend', checkAccessToken, checkIsFriendForUser, removeFriend);

userRouter.get('/user/requests', checkAccessToken, getRequests);
userRouter.post('/:userId/sendRequest',
    checkAccessToken,
    checkIsUserToAddExistById,
    checkIsRelationsBetweenUsers,
    sendRequest);
userRouter.post('/:userId/cancelRequest', checkAccessToken, checkIsRequestInPending, cancelRequest);

userRouter.get('/user/invites', checkAccessToken, getInvites);
userRouter.post('/:userId/acceptInvite', checkAccessToken, checkIsInviteInPending, acceptInvite);
userRouter.post('/:userId/declineInvite', checkAccessToken, checkIsInviteInPending, declineInvite);

userRouter.get('/search', checkAccessToken, searchUsers);

userRouter.get('/userStatuses', checkAccessToken, getUserStatuses);

module.exports = userRouter;
