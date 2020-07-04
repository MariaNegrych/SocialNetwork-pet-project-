const Sequelize = require('sequelize');

const {dataBase} = require('../dataBase');
const {modelNameEnum: {USER}} = require('../constants');

const User = dataBase.define(USER, {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    photo: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: USER,
    timestamps: true
});


module.exports = User;
