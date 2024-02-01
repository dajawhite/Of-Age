import * as z from 'zod'

export const StartupValidation = z.object({
    founderName: z.string()
        .refine(name => /^([a-zA-Z]+) ([a-zA-Z]+)$/.test(name), {
            message: "Enter first and last name separated by a space"
        }),
    email: z.string()
    .refine(email => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email), {
        message: "Enter a valid email"
    }),
    startup: z.string(),
    website: z.string()
        .refine(site => /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(site), {
            message: "Enter a valid website"
        }),
    team: z.string(),
    startupEmail: z.string()
    .refine(email => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email), {
        message: "Enter a valid email"
    }),
    university: z.string().min(10, {message: "Enter full university name"}),
    bio: z.string(),
})

// founderName: ,
//         email: user?.email || '',
//         startup: '',
//         website: '',
//         team: '',
//         startupEmail: '',
//         university: '',
//         bio:''