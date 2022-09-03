import Sequelize from 'sequelize'

const sequelize = new Sequelize('auth-db', 'admin', '123456', {
    host: '172.17.0.4:5435',
    dialect: 'postgres',
    quoteIdentifiers: false,
    define: {
        syncOnAssociation: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true,
        freezeTableName: true
    }
})

sequelize
    .authenticate()
    .then(() => {
        console.log("Conectado ao banco de dados!")
    })
    .catch((err) => {
        console.log("Erro ao se conectar com o banco de dados : ", err.message)
    })

export default sequelize