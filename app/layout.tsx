import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emad El-faky'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
