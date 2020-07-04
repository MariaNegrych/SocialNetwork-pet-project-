const {userService} = require('../../services');
const {
    passwordHasherHelper: {hashPassword},
} = require('../../helpers');
const {
    responseStatusCodesEnum: {CREATED, OK}
} = require('../../constants');

class UserController {
    async createUser(req, res, next) {
        try {
            const user = req.body;

            user.password = await hashPassword(user.password);
            user.photo = 'assets/userDefaultAvatar.png';

            await userService.createUser(user);

            res.sendStatus(CREATED);
        } catch (e) {
            next(e);
        }
    }

    infoUser(req, res, next) {
        res.json(req.user);
    }

    async getUsers(req, res, next) {
        try {
            const {user} = req.user;
            const info = await userService.getAllUsers(user.id);

            res.json(info);
        } catch (e) {
            next(e);
        }
    }

    async getFriends(req, res, next) {
        try {
            const {user} = req.user;
            const userFriends = await userService.getAllFriends(user.id);

            res.json(userFriends);
        } catch (e) {
            next(e);
        }
    }

    async acceptInvite(req, res, next) {
        try {
            const {user} = req.user;
            const {userId} = req.params;

            await userService.createFriend(+userId, user.id);
            await userService.addToFriends(user.id, +userId);

            res.sendStatus(OK);
        } catch (e) {
            res.json(e)
        }
    }

    async declineInvite(req, res, next) {
        try {
            const {user} = req.user;
            const {userId} = req.params;

            await userService.deleteRequest(+userId, user.id);

            res.sendStatus(OK);
        } catch (e) {
            res.json(e)
        }
    }

    async cancelRequest(req, res, next) {
        try {
            const {user} = req.user;
            const {userId} = req.params;

            const result = await userService.deleteRequest(user.id, +userId);

            res.json(result);
        } catch (e) {
            res.json(e)
        }
    }

    async getRequests(req, res, next) {
        try {
            const {user} = req.user;

            const requests = await userService.getRequests(user.id);

            res.json(requests);
        } catch (e) {
            next(e);
        }
    }

    async sendRequest(req, res, next) {
        try {
            const {user: {id}} = req.user;
            const userToAdd = req.params.userId;

            await userService.createRequest(id, +userToAdd);

            res.sendStatus(OK);
        } catch (e) {
            res.status(e)
        }
    }

    async removeFriend(req, res, next) {
        try {
            const {user} = req.user;
            const {friendId} = req.params;

            await userService.deleteFriend(user.id, +friendId);

            res.sendStatus(OK);
        } catch (e) {
            next(e);
        }
    }

    async searchUsers(req, res, next) {
        try {
            const {target} = req.query;
            const {user} = req.user;
            const usersByTarget = await userService.searchUsers(user.id, target);
            let usersWithStatus = [];

            // search statuses with current user
            if (usersByTarget.length) {
                for (const userByTarget of usersByTarget) {
                    const userStatuses = await userService.getRelationsWithUser(user.id, userByTarget.id);

                    usersWithStatus.push({...userByTarget, status: userStatuses});
                }
            }

            res.json(usersWithStatus);
        } catch (e) {
            next(e);
        }
    }

    async getInvites(req, res, next) {
        try {
            const {user} = req.user;
            const usersFromInvite = await userService.getInvites(user.id);

            res.json(usersFromInvite);
        } catch (e) {
            next(e);
        }
    }

    async getUserStatuses(req, res, next) {
        try {
            const userStatuses = await userService.getUserStatuses();

            res.json(userStatuses);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();
