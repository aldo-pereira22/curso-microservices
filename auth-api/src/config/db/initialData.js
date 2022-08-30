import bcrypt from 'bcrypt'
import User from '../db/dbConfig.js'

export async function createInitialdata() {
    await User.sync({ force: true })

    let password = await bcrypt.hash('123456')

    await User.create({
        name: 'User teste',
        email: 'teste@gmail.com',
        password: password
    })
}