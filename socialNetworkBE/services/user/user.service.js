const {Op} = require('sequelize');
const {UserModel, UserStatusModel, StatusModel} = require('../../models');
const {userStatusEnum: {PENDING, FRIEND}} = require('../../constants');

class UserService {
    findOneByParams(params) {
        return UserModel.findOne(
            {
                where: params,
                raw: true,
                nest: true
            }
        );
    }

    createUser(user) {
        return UserModel.create(user, {
            raw: true,
            nest: true
        });
    }

    createRequest(id, userToAdd) {
        return UserStatusModel.create({
                userId: id,
                userIdFriend: userToAdd,
                statusId: PENDING.id
            }
        );
    }

    createFriend(id, userToAdd) {
        return UserStatusModel.update({statusId: FRIEND.id},
            {
                where: {
                    userId: id,
                    userIdFriend: userToAdd,
                    statusId: PENDING.id
                }
            }
        );
    }

    addToFriends(id, userToAdd) {
        return UserStatusModel.create({
                userId: id,
                userIdFriend: userToAdd,
                statusId: FRIEND.id
            }
        );
    }

    getAllUsers(userId) {
        return UserModel.findAll(
            {
                attributes: ['id', 'name', 'surname', 'photo'],
                where: {
                    id: {[Op.not]: userId}
                }
            }
        );
    }

    getAllFriends(id) {
        return UserModel.findAll({
            attributes: ['id', 'name', 'surname', 'photo'],
            include: [
                {
                    model: UserStatusModel,
                    attributes: ['statusId', 'userId'],
                    as: 'userIdFriend',
                    where: {
                        userId: id,
                        statusId: FRIEND.id
                    },
                }
            ],
        });
    }

    deleteFriend(userId, userIdFriend) {
        return UserStatusModel.destroy({
            where: {
                [Op.or]: [
                    {
                        userId,
                        userIdFriend,
                    },
                    {
                        userId: userIdFriend,
                        userIdFriend: userId
                    },
                ],
                statusId: FRIEND.id
            },
            nest: true,
            raw: true
        })
    }

    getRelationsWithUser(id, userToAdd) {
        return UserStatusModel.findOne({
            attributes: ['statusId', 'userId','userIdFriend'],
            where: {
                [Op.or]: [
                    {
                        userId: id,
                        userIdFriend: userToAdd
                    },
                    {
                        userId: userToAdd,
                        userIdFriend: id
                    }
                ]
            },
            nest: true,
            raw: true
        });
    }

    getRequests(id) {
        return UserModel.findAll({
            attributes: ['id', 'name', 'surname', 'photo'],
            include: [
                {
                    model: UserStatusModel,
                    as: 'userIdFriend',
                    attributes: ['statusId'],
                    where: {
                        userId: id,
                        statusId: PENDING.id
                    }
                }
            ],
            nest: true,
            raw: true
        });
    }

    getRequestFromUserByParams(id, userToAdd, params) {
        return UserStatusModel.findOne({
            where: {
                userId: id,
                userIdFriend: userToAdd,
                ...params
            },
            nest: true,
            raw: true
        });
    }

    deleteRequest(userId, userIdFriend) {
        return UserStatusModel.destroy({
            where: {
                userId,
                userIdFriend,
                statusId: PENDING.id
            }
        });
    }

    searchUsers(userId, target) {
        return UserModel.findAll({
            attributes: ['id', 'name', 'surname', 'photo'],
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${target}%`
                        }
                    },
                    {
                        surname: {
                            [Op.like]: `%${target}%`
                        }
                    }
                ],
                id: {[Op.not]: userId}
            },
            // include: [
            //     {
            //         model: UserStatusModel,
            //         as: 'userId',
            //         attributes: ['statusId', 'userIdFriend'],
            //     }
            // ],
            nest: true,
            raw: true
        });
    }

    getInvites(userId) {
        return UserModel.findAll({
            attributes: ['id', 'name', 'surname', 'photo'],
            include: [
                {
                    model: UserStatusModel,
                    as: 'userId',
                    attributes: ['statusId', 'userIdFriend'],
                    where: {
                        userIdFriend: userId,
                        statusId: PENDING.id
                    }
                }
            ],
            nest: true,
            raw: true
        });
    }

    getUserStatuses() {
        return StatusModel.findAll({attributes: ['id', 'type']});
    }
}

module.exports = new UserService();
