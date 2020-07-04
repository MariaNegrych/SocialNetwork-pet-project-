const Sequelize = require('sequelize');

const {configs: {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST}} = require('../configs');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST
});

module.exports = sequelize;
