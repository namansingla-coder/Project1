/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/signup', 'AuthController.signup').middleware('signup')
Route.post('/login', 'AuthController.login').middleware('login')
Route.get('/me', 'UsersController.me').middleware('auth')
Route.group(() => {
  Route.resource('users', 'UsersController').apiOnly()
}).middleware('auth').middleware('acl:admin')

Route.get('/health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  return report.healthy
  ? response.ok(report)
  : response.badRequest(report)
})
