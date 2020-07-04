const Sequelize = require('sequelize');

const {dataBase} = require('../dataBase');
const {modelNameEnum: {TOKEN}} = require('../constants');

const Token = dataBase.define(TOKEN, {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    access_token: Sequelize.STRING,
    refresh_token: Sequelize.STRING
}, {
    tableName: TOKEN,
    timestamps: true
});

module.exports = Token;
