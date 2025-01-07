import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SignupValidator from '../../Validators/SignupValidator'
import LoginValidator from '../../Validators/LoginValidator'
import { data } from '../../dummyData'
import jwt from 'jsonwebtoken'
import { appKey } from 'Config/app'
import UnaunthenticatorException from '../../Exceptions/UnaunthenticatorException'

export default class AuthController {
    public async signup(ctx: HttpContextContract) {
        const payload = await ctx.request.validate(SignupValidator)
        return {
            payload
        }
    }
    public async login(ctx: HttpContextContract) {
        const payload = await ctx.request.validate(LoginValidator)
        console.log(payload)
        console.log(data)
        const user = data.find(user => user.email === payload.email && user.password === payload.password)
        console.log(user)
        if(!user){
            throw new UnaunthenticatorException("Invalid email or password")
        }
        const token = jwt.sign({sub: user.id}, appKey, {expiresIn: 60*60, jwtid: '1'})
        return {
            payload,
            token
        }
    }
}
