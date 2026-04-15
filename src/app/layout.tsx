import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Loader from '@/components/ui/Loader'
import AnimatedCursor from '@/components/ui/AnimatedCursor'

export const metadata: Metadata = {
  title: 'Bhaumik Patel — ML Engineer & Builder',
  description: 'I design systems that think, learn, and scale. CS student at PDEU building at the intersection of ML, systems, and product.',
  keywords: ['Bhaumik Patel', 'ML Engineer', 'PDEU', 'Tatvam AI', 'Portfolio'],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Bhaumik Patel — ML Engineer & Builder',
    description: 'I design systems that think, learn, and scale.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Loader />
          <AnimatedCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}