interface FooterLink {
  href: string
  text: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  columns: FooterColumn[]
  copyright: string
}

export default function Footer({ columns, copyright }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          {copyright}
        </div>
      </div>
    </footer>
  )
}

