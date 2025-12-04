import { ReactNode } from 'react'

interface ValueCardProps {
  icon?: ReactNode
  title: string
  body: string
  className?: string
}

export default function ValueCard({ icon, title, body, className = '' }: ValueCardProps) {
  return (
    <div className={`p-6 ${className}`}>
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  )
}

