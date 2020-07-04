'use strict';

const {modelNameEnum: {USER, TOKEN, STATUS, USERSTATUS}} = require('../constants');

module.exports = {
    up: async (queryInterface, Sequelize) => {

        try {
            await queryInterface.createTable(USER, {
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
                },
                createdAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn('now')
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn('now')
                }
            });

            await queryInterface.createTable(TOKEN, {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
                },
                access_token: Sequelize.STRING,
                refresh_token: Sequelize.STRING,
                createdAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn('now')
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn('now')
                },
                userId: {
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                    references: {
                        model: 'users',
                        key: 'id'
                    },
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE"
                }
            });

            await queryInterface.createTable(STATUS, {
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
                },
                createdAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn('now')
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn('now')
                },
            });

            await queryInterface.createTable(USERSTATUS, {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
                },
                createdAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn('now')
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn('now')
                },
                userId: {
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                    allowNull: false,
                    references: {
                        model: 'users',
                        key: 'id'
                    },
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE"
                },
                statusId: {
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                    allowNull: false,
                    references: {
                        model: 'status',
                        key: 'id'
                    },
                    onUpdate: "NO ACTION",
                    onDelete: "NO ACTION"
                },
                userIdFriend: {
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                    allowNull: false,
                    references: {
                        model: 'users',
                        key: 'id'
                    },
                    onUpdate: "NO ACTION",
                    onDelete: "NO ACTION"
                },
            });

            return Promise.resolve()
        } catch (e) {
            console.log(e);
        }

        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
    },

    down: async (queryInterface, Sequelize) => {


        await queryInterface.dropTable(USERSTATUS);
        await queryInterface.dropTable(TOKEN);
        await queryInterface.dropTable(STATUS);
        await queryInterface.dropTable(USER);
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    }
};
