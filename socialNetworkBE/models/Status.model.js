const Sequelize = require('sequelize');

const {dataBase} = require('../dataBase');
const {modelNameEnum: {STATUS}} = require('../constants');

const Status = dataBase.define(STATUS, {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: STATUS,
    timestamps: true
});

module.exports = Status;
