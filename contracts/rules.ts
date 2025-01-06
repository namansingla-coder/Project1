

declare module '@ioc:Adonis/Core/Validator' {
    interface Rules {
        minimumLength(minimumLength: number): Rule
    }
}
