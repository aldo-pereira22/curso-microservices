import bcrypt from 'bcrypt'
import User from '../../modules/user/model/User'


export default async function createInitialData() {

    await User.sync({ force: true })

    try {
        let password = await bcrypt.hash('123456')

        await User.create({
            name: "User Teste",
            email: "testeuser@gmail.com",
            password: password
        })

    } catch (error) {
        console.log(error)
    }

}