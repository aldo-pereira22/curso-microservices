import express from "express";
// import * as db from './src/config/db/initialData'
import * as db from './src/config/db/init.js    '
const database = './db'
const app = express()
const env = process.env
const PORT = env.PORT || 3000


app.get('/api/status', (req, res) => {
    return res.status(200).json({
        service: "Auth-API",
        status: "UP",
        httpStatus: "200"
    })
})

app.listen(PORT, () => {
    console.log(`Server Iniciado na porta ${PORT}`)
})