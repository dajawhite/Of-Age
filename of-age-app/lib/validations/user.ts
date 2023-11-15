import * as z from 'zod'

export const UserValidation = z.object({
    name: z.string()
        .refine(name => /^([a-zA-Z]+) ([a-zA-Z]+)$/.test(name), {
            message: "Enter first and last name separated by a space"
        }),
    university: z.string().min(10, {message: "Enter full university name"}),
    number: z.string()
        .refine(number => /^\+[1-9]\d{1,14}$/.test(number), {
            message: "Enter a phone number in the format with +{countrycode}"
        }),
    uniEmail: z.string()
        .refine(email => /^[\w-\.]+@([\w-]+\.)+edu$/.test(email), {
            message: "Enter a valid .edu email"
        }),
    x: z.string()
        .max(15, {message: "Maximum 15 characters"}),
    instagram: z.string()
        .max(30, {message: "Maximum 30 characters"}),
    iMessage: z.enum(["Yes, add me", "No, I'm good"], {
        required_error: "You need to select a notification type.",
    }),
    
})