import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserRepository from "../repository/UserRepository.js"
import * as httpStatus from '../../../config/constants/httpStatus.js'
import * as secret from '../../../config/constants/secrets.js'
import UserException from "../exception/UserException.js"



class UserService {
    async findByEmail(req) {
        try {
            const { email } = req.params
            this.validateRequestData(email)
            let user = await UserRepository.findByEmail(email)
            this.validateUserNotFound(user)
            return {
                status: httpStatus.SUCCESS,
                user: {
                    id: user.id,
                    nome: user.nome,
                    email: user.email,
                }
            }
        } catch (error) {
            return {
                status: error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: error.message
            }
        }
    }

    validateRequestData(email) {
        if (!email) {
            throw new UserException(httpStatus.BAD_REQUEST, 'User email was not informed.')
        }
    }

    validateUserNotFound(user) {
        if (!user) {
            throw new Error(httpStatus.BAD_REQUEST, "User was not found.")
        }
    }

    async getAcessToken(req) {
        try {
            const { email, password } = req.body
            this.validateAcessTokenData(email, password)
            let user = await UserRepository.findByEmail(email)
            this.validateUserNotFound(user)
            await this.validatePassword(password, user.password)

            const authUser = { id: user.id, name: user.name, email: user.email }
            const acessToken = jwt.sign({ authUser }, secret.API_SECRET, { expiresIn: '1d' })
            return {
                status: httpStatus.SUCCESS,
                acessToken,
            }



        } catch (error) {
            return {
                status: error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: error.message
            }
        }


    }

    validateAcessTokenData(email, password) {
        if (!email || !password) {
            throw new UserException(httpStatus.UNAUTHORIZED, "Email and password must informed.")
        }
    }

    async validatePassword(password, hashPassword) {
        if (!await bcrypt.compare(password, hashPassword)) {
            throw new UserException(httpStatus.UNAUTHORIZED, "Password doesn't match.")
        }
    }
}

export default new UserService()