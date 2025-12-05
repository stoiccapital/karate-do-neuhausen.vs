import Paragraph from '../content/Paragraph'

interface FAQItemProps {
  question: string
  answer: string
  className?: string
}

export default function FAQItem({ question, answer, className = '' }: FAQItemProps) {
  return (
    <div className={`border-b border-neutral-200 flex flex-col gap-2 pb-6 ${className}`}>
      <h3 className="text-lg font-semibold">{question}</h3>
      <Paragraph align="left">{answer}</Paragraph>
    </div>
  )
}
