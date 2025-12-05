import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  maxWidth?: 'standard' | 'wide' | 'narrow'
  className?: string
}

const maxWidthMap = {
  standard: 'max-w-7xl',
  wide: 'max-w-[90rem]',
  narrow: 'max-w-4xl',
}

export default function Container({ 
  children, 
  maxWidth = 'standard',
  className = '' 
}: ContainerProps) {
  return (
    <div className={`${maxWidthMap[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

