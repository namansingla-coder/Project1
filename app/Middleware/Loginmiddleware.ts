import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
  
export default class Loginmiddleware {
  public async handle({}: HttpContextContract, next: () => Promise<void>) {
    
    await next()
  }
}
