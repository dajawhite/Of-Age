import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Oswald, Montserrat } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: '--font-oswald'
})
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat'
})

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
          <body className={montserrat.variable}>{children}</body>
        </html>
    </ClerkProvider>
    
  )
}
