const { Sequelize } = require('sequelize');

const username = 'root';
const password = '';
const database = 'sns-nodejs';
const host = 'localhost';

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql'
});

(async function () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();