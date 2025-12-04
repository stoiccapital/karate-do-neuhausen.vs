import PrimaryButton from '../actions/PrimaryButton'

interface NavLink {
  href: string
  text: string
}

interface NavbarProps {
  logo: string
  links: NavLink[]
  cta?: {
    href: string
    text: string
  }
}

export default function Navbar({ logo, links, cta }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              {logo}
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                {link.text}
              </a>
            ))}
          </div>
          {cta && (
            <div className="hidden md:block">
              <PrimaryButton href={cta.href}>
                {cta.text}
              </PrimaryButton>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

