import { ReactNode } from 'react'

interface SecondaryButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  target?: string
  rel?: string
}

export default function SecondaryButton({ 
  children, 
  href, 
  onClick,
  className = '',
  target,
  rel
}: SecondaryButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 text-base font-medium text-neutral-900 bg-white border-2 border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900'
  
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    )
  }
  
  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  )
}
