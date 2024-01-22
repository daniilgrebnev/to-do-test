// config/database.js
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('todo_app', 'postgres', 'postgres', {
	host: 'localhost', // Используйте 'localhost', поскольку контейнер запущен локально
	dialect: 'postgres',
	port: 7432,
})

module.exports = sequelize
