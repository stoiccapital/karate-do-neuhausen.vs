import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Stack from '@/components/structural/Stack'
import Grid from '@/components/structural/Grid'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import ValueCard from '@/components/conversion/ValueCard'

export default function ValueProps() {
  const values = [
    {
      title: 'Bauen Sie echte Stärke auf',
      body: 'Verbessern Sie Balance, Flexibilität und Rumpfkraft. Bewegen Sie sich im Alltag besser. Reduzieren Sie Verletzungsrisiken.',
    },
    {
      title: 'Entwickeln Sie unerschütterliche Konzentration',
      body: 'Lernen Sie, unter Druck zu fokussieren. Wenden Sie diese Fähigkeit in Schule, Beruf und Lebenszielen an.',
    },
    {
      title: 'Meistern Sie praktische Selbstverteidigung',
      body: 'Lernen Sie Techniken, die in echten Situationen funktionieren. Fühlen Sie sich überall sicherer und selbstbewusster.',
    },
    {
      title: 'Stärken Sie Selbstvertrauen und Respekt',
      body: 'Bauen Sie Charakter durch Disziplin auf. Sehen Sie Ergebnisse in Beziehungen, Zielen und im täglichen Leben.',
    },
    {
      title: 'Trainieren Sie in Ihrem Tempo',
      body: 'Trainer passen sich Ihrem Niveau an. Kein Druck. Nur stetiger Fortschritt in sicherer Umgebung.',
    },
    {
      title: 'Lernen Sie authentisches Shotokan-Karate',
      body: 'Folgen Sie bewährten Traditionen. Meistern Sie Techniken, die seit Generationen funktionieren.',
    },
  ]

  return (
    <Section>
      <Container>
        <Stack direction="vertical" gap="lg" align="center">
          <Headline level={2} align="center">
            Warum Karate Do Neuhausen wählen
          </Headline>
          <Subheadline align="center">
            Sechs bewährte Vorteile, die Schüler von innen und außen verändern
          </Subheadline>
          <Grid cols={3} gap="lg">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                title={value.title}
                body={value.body}
              />
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}
