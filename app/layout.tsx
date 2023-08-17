import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import SessionProvider from './SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'Latest feature riched blogging app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar/>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
