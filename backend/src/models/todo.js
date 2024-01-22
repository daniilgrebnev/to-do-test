// models/todo.js
const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Todo = sequelize.define('Todo', {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	text: {
		type: DataTypes.TEXT,
	},
	status: {
		type: DataTypes.STRING,
	},
})

module.exports = Todo
