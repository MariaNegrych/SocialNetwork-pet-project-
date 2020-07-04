const Sequelize = require('sequelize');

const {dataBase} = require('../dataBase');
const {modelNameEnum: {USERSTATUS}} = require('../constants');

const UserStatus = dataBase.define(USERSTATUS, {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    statusId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userIdFriend: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
    }
}, {
    tableName: USERSTATUS,
    timestamps: true
});

module.exports = UserStatus;

