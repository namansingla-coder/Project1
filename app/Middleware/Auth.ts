import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnaunthenticatorException from '../Exceptions/UnaunthenticatorException'
import jwt from 'jsonwebtoken'
import { appKey } from 'Config/app'
import User from '../Models/User'
export default class Auth {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    const token = ctx.request.headers().authorization
    if(!token){
        throw new UnaunthenticatorException("Token is required")
    }
    try{
      const decoded = jwt.verify(token, appKey);
      const user = await User.find(decoded.sub);
      if (!user) {
        throw new UnaunthenticatorException("User not found");
      }
      ctx.request.loggedInUser = user
    }catch(error){
      if(error.name === "TokenExpiredError"){
        throw new UnaunthenticatorException("Token is expired")
      }
      throw new UnaunthenticatorException("Token is invalid")
    }
    await next()
  }
}
