const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fingerprintTemplate: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return User;
};