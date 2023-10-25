import * as z from 'zod'

export const UserValidation = z.object({
    name: z.string()
        .refine(name => /^([a-zA-Z]+) ([a-zA-Z]+)$/.test(name), {
            message: "Enter first and last name separated by a space"
        }),
    university: z.string().min(10, {message: "Enter full university name"}),
    number: z.string()
        .refine(number => /^\d{10}$/.test(number), {
            message: "Enter a 10 digit phone number with no spaces"
        }),
    email: z.string()
        .refine(email => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email), {
            message: "Enter a valid email"
        }),
    x: z.string()
        .max(15, {message: "Maximum 15 characters"}),
    instagram: z.string()
        .max(30, {message: "Maximum 30 characters"}),
    
})