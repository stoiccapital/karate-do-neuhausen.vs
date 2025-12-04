import Image from 'next/image'

interface ImageBlockProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function ImageBlock({ src, alt, width, height, className = '' }: ImageBlockProps) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto rounded-lg"
      />
    </div>
  )
}

