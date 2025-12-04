interface VideoBlockProps {
  src: string
  poster?: string
  className?: string
}

export default function VideoBlock({ src, poster, className = '' }: VideoBlockProps) {
  return (
    <div className={className}>
      <video
        src={src}
        poster={poster}
        controls
        className="w-full h-auto rounded-lg"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

