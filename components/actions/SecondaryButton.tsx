import { ReactNode } from 'react'

interface SecondaryButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export default function SecondaryButton({ 
  children, 
  href, 
  onClick,
  className = '' 
}: SecondaryButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
  
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

