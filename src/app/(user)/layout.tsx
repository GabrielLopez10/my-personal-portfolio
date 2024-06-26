import '../../styles/globals.css'

import { Space_Grotesk } from 'next/font/google'
import Header from '../../components/ui/Header'
import Footer from '../../components/ui/Footer'
import siteMetadata from '../../../data/siteMetadata'
import FlareCursor from '../../components/ui/FlareCursor'
import { type Metadata } from 'next'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang={siteMetadata.language}
      className={`${spaceGrotesk.variable} scroll-smooth `}
      suppressHydrationWarning
    >
      <body className="ease bg-gray-950 transition">
        <Header />

        <main className="mb-auto">
          <FlareCursor />

          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
