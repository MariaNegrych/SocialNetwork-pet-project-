'use strict';

const {modelNameEnum: {STATUS}} = require('../constants');
const {userStatusEnum: {PENDING, FRIEND}} = require('../constants');

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert(STATUS, [
            {
                type: PENDING.type
            },
            {
                type: FRIEND.type
            }
        ]);

        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
    },

    down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete(STATUS, null, {});
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};
