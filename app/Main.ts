import { greeting } from "+module/AppModule"

// biome-ignore lint/nursery/noConsole: Usage of `console` is intentional in this case.
console.info(greeting())
