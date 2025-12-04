import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'
import Hero from './sections/Hero'
import SocialProof from './sections/SocialProof'
import ValueProps from './sections/ValueProps'
import Features from './sections/Features'
import DeepDives from './sections/DeepDives'
import UseCases from './sections/UseCases'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'

export default function LandingPage() {
  const navbarLinks = [
    { href: '#about', text: 'About' },
    { href: '#classes', text: 'Classes' },
    { href: '#instructors', text: 'Instructors' },
    { href: '#contact', text: 'Contact' },
  ]

  const footerColumns = [
    {
      title: 'School',
      links: [
        { href: '#about', text: 'About Us' },
        { href: '#instructors', text: 'Instructors' },
        { href: '#schedule', text: 'Schedule' },
        { href: '#location', text: 'Location' },
      ],
    },
    {
      title: 'Programs',
      links: [
        { href: '#children', text: 'Children' },
        { href: '#teens', text: 'Teens' },
        { href: '#adults', text: 'Adults' },
        { href: '#seniors', text: 'Seniors' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { href: '#faq', text: 'FAQ' },
        { href: '#blog', text: 'Blog' },
        { href: '#gallery', text: 'Gallery' },
        { href: '#events', text: 'Events' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { href: '#contact', text: 'Contact Us' },
        { href: '#signup', text: 'Sign Up' },
        { href: '#visit', text: 'Visit Us' },
        { href: '#phone', text: 'Phone' },
      ],
    },
  ]

  return (
    <>
      <Navbar
        logo="Karate Do Neuhausen"
        links={navbarLinks}
        cta={{ href: '#signup', text: 'Get Started' }}
      />
      <main>
        <Hero />
        <SocialProof />
        <ValueProps />
        <Features />
        <DeepDives />
        <UseCases />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer
        columns={footerColumns}
        copyright="© 2024 Karate Do Neuhausen. All rights reserved."
      />
    </>
  )
}

