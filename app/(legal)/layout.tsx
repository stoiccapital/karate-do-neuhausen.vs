import type { ReactNode } from 'react'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar logo="Karate Do Neuhausen" />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}
