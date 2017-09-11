'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        indexes: [
          {
            fields: [ 'email' ]
          }
        ]
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company: {
        type: Sequelize.STRING
      },
      jobfunction: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      privilege: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    },
    {
      engine: 'InnoDB',                     // default: 'InnoDB'
      charset: 'utf8'                    // default: null
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
