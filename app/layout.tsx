import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FabCaptial',
  description: 'FabCapital is a fintech company that provides a range of financial services to businesses and consumers.',
  generator: 'FabCapital',
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
