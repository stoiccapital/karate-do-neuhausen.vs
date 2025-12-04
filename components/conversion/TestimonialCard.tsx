interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  metric?: string
  className?: string
}

export default function TestimonialCard({ quote, name, role, metric, className = '' }: TestimonialCardProps) {
  return (
    <div className={`p-6 ${className}`}>
      <blockquote className="text-lg text-gray-700 mb-4">
        "{quote}"
      </blockquote>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
        {metric && (
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">{metric}</p>
          </div>
        )}
      </div>
    </div>
  )
}

