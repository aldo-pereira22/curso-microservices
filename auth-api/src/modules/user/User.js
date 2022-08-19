import Sequelize from 'sequelize'


import sequelize from '../../config/db/dbConfig'


const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        type: Sequelize.SRING,
        allowNull: false

    },
    email: {
        type: Sequelize.SRING,
        allowNull: false

    },
    password: {
        type: Sequelize.SRING,
        allowNull: false

    },


},
    {

    }
)

export default User