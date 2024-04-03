const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Attendance;
};