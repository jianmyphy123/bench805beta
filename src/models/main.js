'use strict';
module.exports = function(sequelize, DataTypes) {
  var Main = sequelize.define('Main', {
    col1: DataTypes.STRING,
    col2: DataTypes.STRING,
    col3: DataTypes.STRING,
    col4: DataTypes.STRING,
    col5: DataTypes.STRING,
    col6: DataTypes.STRING,
    col7: DataTypes.STRING,
    col8: DataTypes.TEXT,
    col9: DataTypes.STRING,
    col10: DataTypes.STRING,
    col11: DataTypes.STRING,
    col12: DataTypes.STRING,
    col13: DataTypes.STRING,
    col14: DataTypes.STRING,
    col15: DataTypes.STRING,
    col16: DataTypes.STRING,
    col17: DataTypes.STRING,
    col18: DataTypes.STRING,
    col19: DataTypes.STRING,
    col20: DataTypes.STRING,
    col21: DataTypes.STRING,
    col22: DataTypes.STRING,
    col23: DataTypes.STRING,
    col24: DataTypes.STRING,
    col25: DataTypes.STRING,
    col26: DataTypes.STRING,
    col27: DataTypes.STRING,
    col28: DataTypes.STRING,
    col29: DataTypes.STRING,
    col30: DataTypes.STRING,
    col31: DataTypes.STRING,
    col32: DataTypes.STRING,
    col33: DataTypes.STRING,
    col34: DataTypes.STRING,
    col35: DataTypes.STRING,
    col36: DataTypes.STRING,
    col37: DataTypes.STRING,
    col38: DataTypes.STRING,
    col39: DataTypes.STRING,
    col40: DataTypes.STRING,
    col41: DataTypes.STRING,
    col42: DataTypes.STRING,
    col43: DataTypes.STRING,
    col44: DataTypes.STRING,
    col45: DataTypes.STRING

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    timestamps: false
  });
  return Main;
};
