const Sequelize = require('sequelize')


const sequelize = new Sequelize('teste', 'postgres', '1234', {
    dialect: 'postgres',
    host: "localhost",
})

module.exports = sequelize