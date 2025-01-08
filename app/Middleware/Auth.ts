import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnaunthenticatorException from '../Exceptions/UnaunthenticatorException'
import jwt from 'jsonwebtoken'
import { appKey } from 'Config/app'
import { data } from '../dummyData'
export default class Auth {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    const token = ctx.request.headers().authorization
    if(!token){
        throw new UnaunthenticatorException("Token is required")
    }
    try{
      const decoded = jwt.verify(token, appKey);
      const user = data.find(user => user.id === decoded.sub);
      if (!user) {
        throw new UnaunthenticatorException("User not found");
      }
    }catch(error){
        throw new UnaunthenticatorException("Token is invalid")
    }
    await next()
  }
}
