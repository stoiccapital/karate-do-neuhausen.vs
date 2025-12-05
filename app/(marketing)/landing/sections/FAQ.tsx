import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Stack from '@/components/structural/Stack'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import FAQItem from '@/components/conversion/FAQItem'

interface FaqData {
  question: string
  answer: string
}

const FAQ_ITEMS: FaqData[] = [
  {
    question: 'Brauche ich Vorkenntnisse?',
    answer: 'Keine Vorkenntnisse nötig. Wir heißen komplette Anfänger willkommen. Starten Sie ab Tag eins.',
  },
  {
    question: 'Was soll ich anziehen?',
    answer: 'Tragen Sie bequeme Sportkleidung für Ihre erste Stunde. Wir geben Ihnen Details zur Uniform nach der Anmeldung.',
  },
  {
    question: 'Wie oft sollte ich trainieren?',
    answer: 'Trainieren Sie 2–3 Mal pro Woche für beste Ergebnisse. Wir bieten flexible Terminplanung.',
  },
  {
    question: 'Gibt es Altersbeschränkungen?',
    answer: 'Nein. Wir haben Programme für Kinder (6+), Jugendliche, Erwachsene und Senioren. Alle sind willkommen.',
  },
  {
    question: 'Wie lange dauert es bis zum schwarzen Gürtel?',
    answer: 'Die meisten Schüler erreichen den schwarzen Gürtel in 4–6 Jahren bei konsequentem Training und Engagement.',
  },
  {
    question: 'Kann ich eine Probestunde machen?',
    answer: 'Ja. Ihre erste Stunde ist kostenlos. Kommen Sie vorbei und sehen Sie, ob Karate das Richtige für Sie ist.',
  },
]

export default function FAQ() {
  return (
    <Section>
      <Container maxWidth="narrow">
        <Stack direction="vertical" gap="lg" align="center">
          <Headline level={2} align="center">
            Häufig gestellte Fragen
          </Headline>
          <Subheadline align="center">
            Häufige Fragen beantwortet, bevor Sie starten
          </Subheadline>
        </Stack>
        <Stack direction="vertical" gap="md">
          {FAQ_ITEMS.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Stack>
      </Container>
    </Section>
  )
}
