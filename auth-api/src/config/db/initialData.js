import bcrypt from 'bcrypt'
import User from '../../modules/user/model/User.js'

export async function createInitialdata() {
    await User.sync({ force: true })

    let password = await bcrypt.hash('123456', 10)

    await User.create({
        name: 'User teste',
        email: 'teste1@gmail.com',
        password: password
    })

    await User.create({
        name: 'User teste',
        email: 'teste2@gmail.com',
        password: password
    })
}