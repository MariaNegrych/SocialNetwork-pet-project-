'use strict';

const {modelNameEnum: {USER}} = require('../constants');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(USER, [
      {
        name: 'digimon',
        surname: 'pokemonovich',
        email: 'digi228@gmail.com',
        photo: 'assets/userDefaultAvatar.png',
        password: '$2b$10$iY0KtuDZtcaBMcguaYb45O6omYnBjCIzoOvNMQuubINcg3OeZqqMC',
      },
      {
        name: 'pikachu',
        surname: 'rikachu',
        email: 'chu77@gmail.com',
        photo: 'assets/userDefaultAvatar.png',
        password: '$2b$10$iY0KtuDZtcaBMcguaYb45O6omYnBjCIzoOvNMQuubINcg3OeZqqMC',
      },
      {
        name: 'bulbazavr',
        surname: 'belorusovich',
        email: 'bulba4kg@gmail.com',
        photo: 'assets/userDefaultAvatar.png',
        password: '$2b$10$iY0KtuDZtcaBMcguaYb45O6omYnBjCIzoOvNMQuubINcg3OeZqqMC',
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {

  }
};
