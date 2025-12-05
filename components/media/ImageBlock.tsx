import Image from 'next/image'

interface ImageBlockProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function ImageBlock({ src, alt, width, height, className = '', priority = false }: ImageBlockProps) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className="w-full h-auto rounded-lg"
      />
    </div>
  )
}

