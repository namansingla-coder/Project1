import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnaunthenticatorException from '../Exceptions/UnaunthenticatorException'
import { appKey } from 'Config/app'
import jwt from 'jsonwebtoken'
  
export default class Loginmiddleware {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    
    await next()
  }
}
