import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SignupValidator from '../../Validators/SignupValidator'
import LoginValidator from '../../Validators/LoginValidator'
export default class AuthController {
    public async signup(ctx: HttpContextContract) {
        const payload = await ctx.request.validate(SignupValidator)
        return {
            payload
        }
    }
    public async login(ctx: HttpContextContract) {
        const payload = await ctx.request.validate(LoginValidator)
        return {
            message: payload
        }
    }
}
