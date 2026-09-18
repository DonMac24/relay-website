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

  title: 'Relay ECI | Business continuity through employee transitions',

  description:
    'Relay helps managers keep work moving through departures, leave, and role changes—with clear ownership, linked context, and visibility into what still needs attention.',

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: [
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    shortcut: '/icon.png',
    apple: {
      url: '/icon.png',
      sizes: '512x512',
      type: 'image/png',
    },
  },

  openGraph: {
    title: 'Relay ECI | Business continuity through employee transitions',
    description:
      'Business continuity through employee transitions. Keep work moving with clear ownership, linked context, and visibility into outstanding issues.',
    url: '/',
    siteName: 'Relay ECI',
    type: 'website',
    locale: 'en_CA',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Relay ECI | Business continuity through employee transitions',
    description:
      'Business continuity through employee transitions. Keep work moving with clear ownership, linked context, and visibility into outstanding issues.',
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