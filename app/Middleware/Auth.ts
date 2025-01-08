import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnaunthenticatorException from '../Exceptions/UnaunthenticatorException'
import jwt from 'jsonwebtoken'
import { appKey } from 'Config/app'
export default class Auth {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    const token = ctx.request.headers().authorization
    console.log("token", token)
    if(!token){
        throw new UnaunthenticatorException("Token is required")
    }
    try{
        const data = jwt.verify(token, appKey)
        ctx.request.loggedInUser = data.find(user => user.id === data.sub)
        console.log(ctx.request.loggedInUser)
    }catch(error){
        throw new UnaunthenticatorException("Token is invalid")
    }
    await next()
  }
}
