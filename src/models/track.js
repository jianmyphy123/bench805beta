'use strict';
module.exports = function(sequelize, DataTypes) {
  var Track = sequelize.define('Track', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    industries: DataTypes.STRING,
    included_intans: DataTypes.STRING,
    excluded_intans: DataTypes.STRING,
    keywords: DataTypes.STRING,
    searchdate: DataTypes.DATEONLY
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    timestamps: false
  });
  return Track;
};
