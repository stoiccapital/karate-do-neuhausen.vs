import Paragraph from '../content/Paragraph'

interface UseCaseCardProps {
  title: string
  body: string
  metric?: string
  className?: string
}

export default function UseCaseCard({ title, body, metric, className = '' }: UseCaseCardProps) {
  return (
    <div className={`p-6 border border-neutral-200 rounded-lg flex flex-col gap-4 ${className}`}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <Paragraph align="left">{body}</Paragraph>
      {metric && (
        <div className="text-sm text-neutral-600">
          {metric}
        </div>
      )}
    </div>
  )
}
