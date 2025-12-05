import Link from 'next/link'
import Container from '@/components/structural/Container'
import Stack from '@/components/structural/Stack'
import Paragraph from '@/components/content/Paragraph'

interface FooterProps {
  copyright?: string
}

export default function Footer({ 
  copyright = '© 2024 Karate Do Neuhausen. All rights reserved.' 
}: FooterProps = {} as FooterProps) {
  return (
    <footer className="w-full bg-neutral-50 py-12">
      <Container maxWidth="standard">
        <div className="flex flex-col gap-8">
          {/* ROW 1: ADDRESS LEFT, MAP RIGHT */}
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {/* LEFT: ADDRESS BLOCK */}
            <Stack gap="sm" className="w-full max-w-sm text-center md:text-left">
              <Paragraph className="text-sm text-neutral-700">Ort</Paragraph>
              <Paragraph className="text-sm text-neutral-700">Winthirplatz 6</Paragraph>
              <Paragraph className="text-sm text-neutral-700">80639 München</Paragraph>
            </Stack>

            {/* RIGHT: GOOGLE MAPS */}
            <div className="w-full max-w-md overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.661718378095!2d11.5076645!3d48.150659599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75a8a752e8b5%3A0x1dbf6e66124d8ad2!2sWinthirpl.%206%2C%2080639%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                width="100%"
                height="180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* ROW 2: LEGAL LINKS CENTERED */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/impressum"
              className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/agb"
              className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              AGB
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
