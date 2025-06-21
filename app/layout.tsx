import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RIVER SUPPLY',
  description: 'Empresa de provición fluvial',
  generator: 'River Supply',
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
