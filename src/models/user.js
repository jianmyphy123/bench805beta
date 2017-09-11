'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    company: DataTypes.STRING,
    jobfunction: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    temporaryToken: DataTypes.STRING,
    resetToken: DataTypes.STRING,
    signupDate: DataTypes.DATEONLY,
    enabled: DataTypes.BOOLEAN,
    privilege: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
      }
    },
    timestamps: false
  });
  return User;
};
