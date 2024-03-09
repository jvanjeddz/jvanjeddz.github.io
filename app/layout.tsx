import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono(
  {
    subsets: ["latin"],
  }
)

export const metadata: Metadata = {
  title: 'jvanjeddz',
  description: 'My personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
