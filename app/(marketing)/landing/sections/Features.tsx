import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Stack from '@/components/structural/Stack'
import Grid from '@/components/structural/Grid'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import FeatureCard from '@/components/conversion/FeatureCard'
import ImageBlock from '@/components/media/ImageBlock'

export default function Features() {
  const features = [
    {
      title: 'Jederzeit starten, keine Vorkenntnisse nötig',
      body: 'Anfängerfreundliche Kurse starten Sie ab Tag eins. Fortschritt Woche für Woche in Ihrem Tempo.',
      link: {
        href: '/trainingszeiten',
        text: 'Kursplan ansehen',
      },
    },
    {
      title: 'Lernen Sie von qualifizierten Experten',
      body: 'Ausgebildete Trainer nutzen bewährte Methoden. Erhalten Sie konsistente, qualitativ hochwertige Anleitung in jeder Stunde.',
      link: {
        href: '/trainer',
        text: 'Unsere Trainer kennenlernen',
      },
    },
    {
      title: 'Wählen Sie Ihre Trainingszeiten',
      body: 'Mehrere wöchentliche Termine passen zu Ihrem Zeitplan. Trainieren Sie 2-3 Mal pro Woche für beste Ergebnisse.',
      link: {
        href: '/trainingszeiten',
        text: 'Alle Zeiten ansehen',
      },
    },
  ]

  return (
    <Section>
      <Container>
        <Stack direction="vertical" gap="lg" align="center">
          <Headline level={2} align="center">
            Was wir anbieten
          </Headline>
          <Subheadline align="center">
            Drei Wege, wie wir Training zugänglich und effektiv machen
          </Subheadline>
          <Grid cols={3} gap="lg">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                body={feature.body}
                link={feature.link}
              />
            ))}
          </Grid>
          <div>
            <ImageBlock
              src="/placeholder-training.jpg"
              alt="Gruppe von Schülern übt gemeinsam Kampfkunsttechniken im Dojo"
              width={1200}
              height={600}
            />
          </div>
        </Stack>
      </Container>
    </Section>
  )
}
