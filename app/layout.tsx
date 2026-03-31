import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import BrumeNav from '@/components/BrumeNav'
import PageTransition from '@/components/PageTransition'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Brume — Bar à Cocktails, Paris 6e',
  description:
    'Brume, bar à cocktails speakeasy au coeur de Paris 6e. Cocktails signature, ambiance feutrée, réservation en ligne.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <BrumeNav />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
      </body>
    </html>
  )
}
