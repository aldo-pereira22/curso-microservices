import Sequelize from 'sequelize'
const sequelize = new Sequelize("auth-db", "postgres", "1234", {
    host: "localhost",
    dialect: "postgres",
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
        console.info("Conexão estabelecida!!!")
    })
    .catch((err) => {
        console.error("Erro ao se conectar com o banco de dados: ", err.message)
    })

export default sequelize