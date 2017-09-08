'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        indexes: [
          {
            fields: [ 'email' ]
          }
        ]
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      company: {
        allowNull: true,
        type: Sequelize.STRING
      },
      jobfunction: {
        allowNull: false,
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.INTEGER
      },
      temporaryToken: {
        type: Sequelize.STRING
      },
      resetToken: {
        type: Sequelize.STRING
      },
      signupDate: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW
      },
      enabled: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    },
    {
      engine: 'InnoDB',                     // default: 'InnoDB'
      charset: 'utf8'                    // default: null
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('user');
  }
};
