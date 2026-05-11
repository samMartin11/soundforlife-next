import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.soundforlife.in'),
  title: {
    default: 'SFL Hearing Solutions | Hearing Aids India',
    template: '%s | SFL Hearing Solutions',
  },
  description: 'Free hearing test and consultation. Book a trial for top hearing aid brands across 30+ cities in India.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'SFL Hearing Solutions',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* TODO: Replace with your Header component */}
        <main>{children}</main>
        {/* TODO: Replace with your Footer component */}
      </body>
    </html>
  )
}