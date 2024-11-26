const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Lynn', 'root', 'Lynn3745##', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
