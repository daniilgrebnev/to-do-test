// config/database.js
const { Sequelize } = require('sequelize')
const config = require('./sequelize.config')

const sequelize = new Sequelize(config.development)
module.exports = sequelize
