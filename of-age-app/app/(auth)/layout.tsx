import React from "react";
import {ClerkProvider} from "@clerk/nextjs"
import { Inter } from "next/font/google";
import '../styles/globals.css'

//this is important for SEO
export const metadata ={
    title: 'Of Age',
    description: 'Meet who\'s building'
}

//defining a font, subsets is an array because there can be multiple
const inter =Inter({subsets: ["latin"]})

export default function RootLayout({ 
    children 
}: {
    //must define the type for these children 
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={inter.className}>{children}</body>
            </html>
        </ClerkProvider>
    )
}