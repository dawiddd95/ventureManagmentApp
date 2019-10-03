const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
   host: 'localhost',
   dialect: 'postgres',
   operatorAliases: false,
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
   }
});

module.exports = db;
