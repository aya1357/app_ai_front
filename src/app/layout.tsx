import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/general/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '校閲ちゃん',
  description: '校閲ちゃんは、日本語の文章を校閲するためのアプリです。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
