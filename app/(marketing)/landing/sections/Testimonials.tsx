import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Stack from '@/components/structural/Stack'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Grid from '@/components/structural/Grid'
import TestimonialCard from '@/components/conversion/TestimonialCard'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Ich hatte Schwierigkeiten, den Fokus zu behalten. Das strukturierte Training half mir, Disziplin aufzubauen, und ich bleibe jetzt den ganzen Tag konzentriert.',
      name: 'Sarah Müller',
      role: 'Schülerin',
    },
    {
      quote: 'Meinem Sohn fehlte Selbstvertrauen. Das Programm gab ihm Struktur, Respekt und messbares Wachstum, und er geht jetzt Herausforderungen mit mehr Selbstsicherheit an.',
      name: 'Michael Schmidt',
      role: 'Elternteil',
    },
    {
      quote: 'Mir fehlte eine konsequente Fitness-Routine. Das Training hier baute meine körperliche Stärke auf und bot eine unterstützende Gemeinschaft, die mich aktiv hält.',
      name: 'Anna Weber',
      role: 'Schülerin',
    },
  ]

  return (
    <Section>
      <Container>
        <Stack direction="vertical" gap="lg" align="center">
          <Headline level={2} align="center">
            Was unsere Schüler sagen
          </Headline>
          <Subheadline align="center">
            Echte Ergebnisse von echten Menschen in unserer Gemeinschaft
          </Subheadline>
          <Grid cols={3} gap="lg">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}
