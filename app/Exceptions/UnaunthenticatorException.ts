import { Exception } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new UnaunthenticatorException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class UnaunthenticatorException extends Exception {
    constructor(message: string) {
        super(message)
    }
    handle(error: UnaunthenticatorException, ctx: HttpContextContract) {
        ctx.response.status(401).json({ 
            errors: [
                {
                    message: error.message,
                    status: 401,
                    code: error.code
                }
            ]
        })
    }

}
