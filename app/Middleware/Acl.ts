import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnaunthenticatorException from '../Exceptions/UnaunthenticatorException'
export default class Acl {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>, props: string[]) {
    if(!props.includes(ctx.request.loggedInUser!.role)){
      throw new UnaunthenticatorException("You are not authorized to access this resource")
    }
    // code for middleware goes here. ABOVE THE NEXT CALL
    await next()
  }
}
