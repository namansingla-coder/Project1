import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class SigupMiddlelayer {
  public async handle({}: HttpContextContract, next: () => Promise<void>) {
    
    await next()
    console.log("The code of end signup middle layer is here")
  }
}
