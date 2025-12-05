import type { Metadata } from 'next'
import Hero from './sections/Hero'
import SocialProof from './sections/SocialProof'
import ValueProps from './sections/ValueProps'
import Features from './sections/Features'
import DeepDives from './sections/DeepDives'
import UseCases from './sections/UseCases'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'

// Pricing section intentionally omitted (optional per Architecture SOP)

export const metadata: Metadata = {
  metadataBase: new URL('https://www.karate-do-neuhausen.com'),
  title: 'Karate Do Neuhausen – Traditionelles Karate Training',
  description: 'Meistern Sie traditionelles Karate mit qualifizierten Trainern. Bauen Sie körperliche Fitness, mentale Disziplin und Selbstverteidigungsfähigkeiten auf.',
  alternates: {
    canonical: 'https://www.karate-do-neuhausen.com/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Karate Do Neuhausen – Traditionelles Karate Training',
    description: 'Meistern Sie traditionelles Karate mit qualifizierten Trainern. Bauen Sie körperliche Fitness, mentale Disziplin und Selbstverteidigungsfähigkeiten auf.',
    url: 'https://www.karate-do-neuhausen.com/',
    siteName: 'Karate Do Neuhausen',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Karate Do Neuhausen',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karate Do Neuhausen – Traditionelles Karate Training',
    description: 'Meistern Sie traditionelles Karate mit qualifizierten Trainern. Bauen Sie körperliche Fitness, mentale Disziplin und Selbstverteidigungsfähigkeiten auf.',
    images: ['/og-image.jpg'],
  },
}

export default function LandingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Karate Do Neuhausen',
    url: 'https://www.karate-do-neuhausen.com',
    description: 'Traditionelles Karate Training für alle Altersgruppen mit qualifizierten Trainern',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Neuhausen',
      addressCountry: 'CH',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <SocialProof />
      <ValueProps />
      <Features />
      <DeepDives />
      <UseCases />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
