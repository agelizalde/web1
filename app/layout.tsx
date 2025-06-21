import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RIVER SUPPLY',
  description: 'Empresa de provición fluvial',
  generator: 'River Supply',
    icons: {
    icon: 'https://www.riversupply.com.py/assets/images/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
