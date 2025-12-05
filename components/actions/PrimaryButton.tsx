import { ReactNode } from 'react'

interface PrimaryButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  target?: string
  rel?: string
}

export default function PrimaryButton({ 
  children, 
  href, 
  onClick,
  className = '',
  target,
  rel
}: PrimaryButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900'
  
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
