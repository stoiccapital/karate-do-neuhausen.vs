interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  metric?: string
  className?: string
}

export default function TestimonialCard({ quote, name, role, metric, className = '' }: TestimonialCardProps) {
  return (
    <div className={`p-6 border border-neutral-200 rounded-lg flex flex-col gap-4 ${className}`}>
      <blockquote className="text-lg text-neutral-700">
        "{quote}"
      </blockquote>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-neutral-600">{role}</p>
        </div>
        {metric && (
          <div className="text-right">
            <p className="text-2xl font-bold text-neutral-900">{metric}</p>
          </div>
        )}
      </div>
    </div>
  )
}
