import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Stack from '@/components/structural/Stack'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Paragraph from '@/components/content/Paragraph'
import Grid from '@/components/structural/Grid'

export default function SocialProof() {
  const metrics = [
    { value: '50+', label: 'aktive Schüler' },
    { value: '20+', label: 'Jahre Erfahrung' },
    { value: '20', label: 'qualifizierte Trainer' },
    { value: '1,000+', label: 'Absolventen' },
  ]

  return (
    <Section>
      <Container>
        <Stack direction="vertical" gap="lg" align="center">
          <Headline level={2} align="center">
            Vertrauen von über 50 Schülern in Neuhausen
          </Headline>
          <Subheadline align="center">
            Zwei Jahrzehnte bewährter Ergebnisse. Werden Sie Teil einer Gemeinschaft, die gemeinsam stärker wird.
          </Subheadline>
          <Grid cols={4} gap="lg">
            {metrics.map((metric, index) => (
              <Stack key={index} direction="vertical" gap="sm" align="center">
                <Headline level={3} align="center">{metric.value}</Headline>
                <Paragraph align="center">{metric.label}</Paragraph>
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}
