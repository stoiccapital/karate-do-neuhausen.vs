import { ReactNode } from 'react'

interface FeatureCardProps {
  icon?: ReactNode
  title: string
  body: string
  link?: {
    href: string
    text: string
  }
  className?: string
}

export default function FeatureCard({ icon, title, body, link, className = '' }: FeatureCardProps) {
  return (
    <div className={`p-6 ${className}`}>
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{body}</p>
      {link && (
        <a href={link.href} className="text-blue-600 hover:text-blue-700 font-medium">
          {link.text} →
        </a>
      )}
    </div>
  )
}

