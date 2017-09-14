'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      industries: {
        type: Sequelize.STRING
      },
      included_intans: {
        type: Sequelize.STRING
      },
      excluded_intans: {
        type: Sequelize.STRING
      },
      keywords: {
        type: Sequelize.STRING
      },
      searchdate: {
        type: Sequelize.DATEONLY
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Tracks');
  }
};
