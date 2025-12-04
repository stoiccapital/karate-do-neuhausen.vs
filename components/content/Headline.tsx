import { ReactNode } from 'react'

interface HeadlineProps {
  children: ReactNode
  level?: 1 | 2 | 3
  align?: 'left' | 'center' | 'right'
  className?: string
}

const levelMap = {
  1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
  2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
  3: 'text-xl md:text-2xl lg:text-3xl font-semibold',
}

const alignMap = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export default function Headline({ 
  children, 
  level = 2, 
  align = 'left',
  className = '' 
}: HeadlineProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  
  return (
    <Tag className={`${levelMap[level]} ${alignMap[align]} ${className}`}>
      {children}
    </Tag>
  )
}

