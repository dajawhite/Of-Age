import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata ={
  title: 'Of Age',
  description: 'Meet who\'s building'
}

export default function RootLayout({
  children,
}: {
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