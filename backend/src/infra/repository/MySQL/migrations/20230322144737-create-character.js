'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING },
      level: { type: Sequelize.STRING },
      resident: { type: Sequelize.STRING },
      skills: { type: Sequelize.STRING },
      about: { type: Sequelize.TEXT },
      image1: { type: Sequelize.STRING },
      image2: { type: Sequelize.STRING },
      page: { type: Sequelize.STRING },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('characters');
  }
};
