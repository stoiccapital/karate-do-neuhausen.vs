import { ReactNode } from 'react'

interface PrimaryButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export default function PrimaryButton({ 
  children, 
  href, 
  onClick,
  className = '' 
}: PrimaryButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors'
  
  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
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

