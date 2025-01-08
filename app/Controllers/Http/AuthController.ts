import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SignupValidator from '../../Validators/SignupValidator'
import LoginValidator from '../../Validators/LoginValidator'
import jwt from 'jsonwebtoken'
import { appKey } from 'Config/app'
import User from '../../Models/User'
import UnaunthenticatorException from '../../Exceptions/UnaunthenticatorException'
import Hash from '@ioc:Adonis/Core/Hash'
export default class AuthController {
    public async signup(ctx: HttpContextContract) {
        const payload = await ctx.request.validate(SignupValidator)
        return await User.create(payload)
    }
    public async login(ctx: HttpContextContract) {
        const payload = await ctx.request.validate(LoginValidator)
        const user = await User.findBy('email', payload.email)
        console.log({use: user})
        if (!user) {
            throw new UnaunthenticatorException("Invalid email")
        }
        const isPasswordValid = await Hash.verify(user.password, payload.password)
        if (!isPasswordValid) {
            throw new UnaunthenticatorException("Invalid password")
        }
        const token = jwt.sign({ sub: user.id }, appKey, { expiresIn: 60 * 60, jwtid: '1' })
        return {
            user,
            token
        }
    }
}
