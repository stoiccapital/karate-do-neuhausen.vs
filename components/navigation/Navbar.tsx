'use client'

import { useState } from 'react'
import Link from 'next/link'
import PrimaryButton from '../actions/PrimaryButton'

interface NavbarProps {
  logo?: string
}

export default function Navbar({ logo = 'Karate Do Neuhausen' }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile hamburger row */}
        <div className="flex items-center justify-between h-16 md:hidden">
          <Link href="/" className="text-xl font-bold" aria-label="Zur Startseite">
            {logo}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-neutral-700 hover:text-neutral-900"
            aria-label="Menü öffnen"
            aria-expanded={open}
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* LEFT: Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold" aria-label="Zur Startseite">
              {logo}
            </Link>
          </div>

          {/* CENTER: Main navigation links */}
          <div className="flex items-center gap-8">
            <Link
              href="/trainer"
              className="text-neutral-700 hover:text-neutral-900 font-medium"
            >
              Trainer
            </Link>
            <Link
              href="/verein"
              className="text-neutral-700 hover:text-neutral-900 font-medium"
            >
              Der Verein
            </Link>
            <Link
              href="/trainingszeiten"
              className="text-neutral-700 hover:text-neutral-900 font-medium"
            >
              Trainingszeiten
            </Link>
            <Link
              href="/preise"
              className="text-neutral-700 hover:text-neutral-900 font-medium"
            >
              Preise
            </Link>
          </div>

          {/* RIGHT: Primary CTA */}
          <div>
            <PrimaryButton href="https://wa.me/491791226471" target="_blank" rel="noreferrer">
              Jetzt anmelden
            </PrimaryButton>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {open && (
          <div className="flex flex-col gap-4 py-4 md:hidden">
            <Link
              href="/trainer"
              className="text-neutral-700 hover:text-neutral-900 font-medium"
            >
              Trainer
            </Link>
            <Link
              href="/verein"
              className="text-neutral-700 hover:text-neutral-900 font-medium"
            >
              Der Verein
            </Link>
            <Link
              href="/trainingszeiten"
              className="text-neutral-700 hover:text-neutral-900 font-medium"
            >
              Trainingszeiten
            </Link>
            <Link
              href="/preise"
              className="text-neutral-700 hover:text-neutral-900 font-medium"
            >
              Preise
            </Link>
            <PrimaryButton href="https://wa.me/491791226471" target="_blank" rel="noreferrer">
              Jetzt anmelden
            </PrimaryButton>
          </div>
        )}
      </div>
    </nav>
  )
}
