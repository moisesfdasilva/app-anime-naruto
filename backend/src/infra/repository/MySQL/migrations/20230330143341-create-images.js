'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      charId: {
        type: Sequelize.INTEGER,
        field: 'char_id',
        references: {
          model: 'characters',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      image: { type: Sequelize.STRING },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('images');
  }
};
