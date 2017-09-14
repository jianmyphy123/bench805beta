'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Mains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      col1: {
        type: Sequelize.STRING
      },
      col2: {
        type: Sequelize.STRING
      },
      col3: {
        type: Sequelize.STRING
      },
      col4: {
        type: Sequelize.STRING
      },
      col5: {
        type: Sequelize.STRING
      },
      col6: {
        type: Sequelize.STRING
      },
      col7: {
        type: Sequelize.STRING
      },
      col8: {
        type: Sequelize.TEXT
      },
      col9: {
        type: Sequelize.STRING
      },
      col10: {
        type: Sequelize.STRING
      },
      col11: {
        type: Sequelize.STRING
      },
      col12: {
        type: Sequelize.STRING
      },
      col13: {
        type: Sequelize.STRING
      },
      col14: {
        type: Sequelize.STRING
      },
      col15: {
        type: Sequelize.STRING
      },
      col16: {
        type: Sequelize.STRING
      },
      col17: {
        type: Sequelize.STRING
      },
      col18: {
        type: Sequelize.STRING
      },
      col19: {
        type: Sequelize.STRING
      },
      col20: {
        type: Sequelize.STRING
      },
      col21: {
        type: Sequelize.STRING
      },
      col22: {
        type: Sequelize.STRING
      },
      col23: {
        type: Sequelize.STRING
      },
      col24: {
        type: Sequelize.STRING
      },
      col25: {
        type: Sequelize.STRING
      },
      col26: {
        type: Sequelize.STRING
      },
      col27: {
        type: Sequelize.STRING
      },
      col28: {
        type: Sequelize.STRING
      },
      col29: {
        type: Sequelize.STRING
      },
      col30: {
        type: Sequelize.STRING
      },
      col31: {
        type: Sequelize.STRING
      },
      col32: {
        type: Sequelize.STRING
      },
      col33: {
        type: Sequelize.STRING
      },
      col34: {
        type: Sequelize.STRING
      },
      col35: {
        type: Sequelize.STRING
      },
      col36: {
        type: Sequelize.STRING
      },
      col37: {
        type: Sequelize.STRING
      },
      col38: {
        type: Sequelize.STRING
      },
      col39: {
        type: Sequelize.STRING
      },
      col40: {
        type: Sequelize.STRING
      },
      col41: {
        type: Sequelize.STRING
      },
      col42: {
        type: Sequelize.STRING
      },
      col43: {
        type: Sequelize.STRING
      },
      col44: {
        type: Sequelize.STRING
      },
      col45: {
        type: Sequelize.STRING
      }

    },
    {
      engine: 'InnoDB',                     // default: 'InnoDB'
      charset: 'utf8'                    // default: null
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Mains');
  }
};
