require('dotenv').config();

const Sequelize = require('sequelize');
const mysql = require('mysql2');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_PW,
    process.env.DATABASE,
    mysql,
    {
      user: 'root',
      password: 'DB_PW',
      database:'DATABASE',
      host: '127.0.0.1',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
