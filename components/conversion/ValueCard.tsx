import { ReactNode } from 'react'

interface ValueCardProps {
  icon?: ReactNode
  title: string
  body: string | ReactNode
  className?: string
}

export default function ValueCard({ icon, title, body, className = '' }: ValueCardProps) {
  return (
    <div className={`p-6 border border-neutral-200 rounded-lg flex flex-col gap-4 ${className}`}>
      {icon && (
        <div>
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold">{title}</h3>
      {typeof body === 'string' ? (
        <p className="text-neutral-600 whitespace-pre-line">{body}</p>
      ) : (
        body
      )}
    </div>
  )
}
