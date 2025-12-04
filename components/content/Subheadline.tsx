import { ReactNode } from 'react'

interface SubheadlineProps {
  children: ReactNode
  align?: 'left' | 'center' | 'right'
  className?: string
}

const alignMap = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export default function Subheadline({ 
  children, 
  align = 'left',
  className = '' 
}: SubheadlineProps) {
  return (
    <p className={`text-lg md:text-xl text-gray-600 ${alignMap[align]} ${className}`}>
      {children}
    </p>
  )
}

