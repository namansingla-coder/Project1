import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SignupValidator from '../../Validators/SignupValidator'
export default class AuthController {
    public async signup(ctx: HttpContextContract) {
        const payload = await ctx.request.validate(SignupValidator)
        return {
            payload
        }
    }
}
