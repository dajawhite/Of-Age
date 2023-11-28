import React from "react";
import {ClerkProvider} from "@clerk/nextjs"
import { Inter } from "next/font/google";
import '../styles/globals.css'
import Script from "next/script";
import Head from "next/head";

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
            <Head>
            {/* Google tag (gtag.js) */}
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FQXEB0FYX5"></Script>
                <Script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-FQXEB0FYX5');
                    `}
                </Script>
            </Head>
            <html lang="en">
            <body className={inter.className}>{children}</body>
            </html>
        </ClerkProvider>
    )
}