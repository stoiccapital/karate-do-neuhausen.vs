import { ReactNode } from 'react'

interface StackProps {
  children: ReactNode
  direction?: 'vertical' | 'horizontal'
  gap?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  className?: string
}

const gapMap = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
}

const directionMap = {
  vertical: 'flex-col',
  horizontal: 'flex-row',
}

const alignMap = {
  left: 'items-start',
  center: 'items-center',
  right: 'items-end',
}

export default function Stack({ 
  children, 
  direction = 'vertical', 
  gap = 'md',
  align = 'left',
  className = '' 
}: StackProps) {
  return (
    <div className={`flex ${directionMap[direction]} ${gapMap[gap]} ${alignMap[align]} ${className}`}>
      {children}
    </div>
  )
}

