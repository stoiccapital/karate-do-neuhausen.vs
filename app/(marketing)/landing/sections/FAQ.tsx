import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Stack from '@/components/structural/Stack'
import Paragraph from '@/components/content/Paragraph'

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <Paragraph align="left">{answer}</Paragraph>
    </div>
  )
}

export default function FAQ() {
  const faqs = [
    {
      question: 'Do I need prior experience to join?',
      answer: 'No prior experience is necessary. We welcome students of all levels, from complete beginners to advanced practitioners.',
    },
    {
      question: 'What should I wear to my first class?',
      answer: 'Comfortable athletic clothing is fine for your first few classes. We\'ll provide information about purchasing a gi (karate uniform) once you decide to continue.',
    },
    {
      question: 'How often should I attend classes?',
      answer: 'We recommend attending at least 2-3 classes per week to see consistent progress. However, you can attend as many classes as your schedule allows.',
    },
    {
      question: 'Are there age restrictions?',
      answer: 'We offer classes for children (ages 6+), teens, adults, and seniors. Each age group has classes tailored to their specific needs and abilities.',
    },
    {
      question: 'How long does it take to earn a black belt?',
      answer: 'The journey to black belt typically takes 4-6 years of consistent training, though this varies based on individual dedication and progress.',
    },
    {
      question: 'Can I try a class before committing?',
      answer: 'Yes, we offer a free trial class for all new students. This allows you to experience our teaching style and meet the instructors before making a commitment.',
    },
  ]

  return (
    <Section>
      <Container>
        <Headline level={2} align="center">
          Frequently Asked Questions
        </Headline>
        <Subheadline align="center" className="mt-4">
          Everything you need to know about starting your karate journey
        </Subheadline>
        <Stack direction="vertical" gap="md" className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </Stack>
      </Container>
    </Section>
  )
}

