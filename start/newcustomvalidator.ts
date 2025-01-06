/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import { validator } from '@ioc:Adonis/Core/Validator'


validator.rule('minimumLength', (value, range: any, options) => {
    if (value.length < range[0]) {
        options.errorReporter.report(
            options.pointer,
            'MinimumLength',
            "Enter more than {{range[0]}} characters"
        )
    }
})