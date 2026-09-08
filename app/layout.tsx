import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.relayeci.com'),
  title: 'Relay ECI | Employee Continuity Intelligence',
  description:
    'Relay helps organizations discover, assign, transfer, and govern critical work through employee departures, extended leave, and role transitions.',
  openGraph: {
    title: 'Relay ECI | Employee Continuity Intelligence',
    description:
      'Discover, assign, transfer, and govern critical work through employee departures, extended leave, and role transitions.',
    url: 'https://www.relayeci.com',
    siteName: 'Relay ECI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Relay ECI | Employee Continuity Intelligence',
    description:
      'Discover, assign, transfer, and govern critical work through employee departures, extended leave, and role transitions.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}