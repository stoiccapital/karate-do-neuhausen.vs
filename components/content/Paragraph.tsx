import { ReactNode } from 'react'

interface ParagraphProps {
  children: ReactNode
  align?: 'left' | 'center' | 'right'
  className?: string
}

const alignMap = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export default function Paragraph({ 
  children, 
  align = 'left',
  className = '' 
}: ParagraphProps) {
  return (
    <p className={`text-base text-gray-700 ${alignMap[align]} ${className}`}>
      {children}
    </p>
  )
}

