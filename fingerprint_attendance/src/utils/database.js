const Sequelize = require('sequelize');
const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'sqlite',
  logging: false,
});

module.exports = sequelize;
