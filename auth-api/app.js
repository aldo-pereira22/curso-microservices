import express from "express"
import * as db from './src/config/db/initialData.js'

import userRoutes from './src/modules/user/routes/UserRouter.js'
const app = express()


// import router from './src/modules/user/routes/UserRouter'
const env = process.env
const PORT = env.PORT || 5000


db.createInitialdata()
app.get('/api/status', (req, res) => {
    return res.status(200).json({
        service: "Auth-API",
        status: "UP",
        httpStatus: "200"
    })
})
app.use(express.json())

app.use(userRoutes)


app.listen(PORT, () => {
    console.log(`Server Iniciado na porta ${PORT}`)
})