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
    <div className={`p-6 border border-neutral-200 rounded-lg flex flex-col gap-4 ${className}`}>
      {icon && (
        <div>
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-neutral-600">{body}</p>
      {link && (
        <a href={link.href} className="text-neutral-900 hover:text-neutral-700 font-medium">
          {link.text} →
        </a>
      )}
    </div>
  )
}
