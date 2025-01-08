import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'
export default class UsersController {
  public async me(ctx: HttpContextContract) {
    console.log(ctx.request.loggedInUser)
    return ctx.request.loggedInUser
  }
  public async index({}: HttpContextContract) {
    return await User.all()
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
