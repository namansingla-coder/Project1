import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Loginmiddleware {
  public async handle({}: HttpContextContract, next: () => Promise<void>) {
    console.log("The code of login middle layer is here")
    await next()
  }
}
