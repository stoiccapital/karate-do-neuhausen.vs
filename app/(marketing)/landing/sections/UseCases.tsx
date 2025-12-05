import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Stack from '@/components/structural/Stack'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Grid from '@/components/structural/Grid'
import UseCaseCard from '@/components/conversion/UseCaseCard'

export default function UseCases() {
  const useCases = [
    {
      title: 'Für Kinder',
      body: 'Selbstvertrauen und Koordination aufbauen. Respekt und Disziplin lernen. Sichere, strukturierte Umgebung.',
      metric: 'Alter 6-12',
    },
    {
      title: 'Für Jugendliche',
      body: 'Fokus und körperliche Fitness entwickeln. Ziele setzen und erreichen. Führungsqualitäten aufbauen.',
      metric: 'Alter 13-17',
    },
    {
      title: 'Für Erwachsene',
      body: 'Fit werden und Selbstverteidigung lernen. Stress reduzieren. Unterstützende Gemeinschaft finden.',
      metric: 'Alter 18+',
    },
    {
      title: 'Für Senioren',
      body: 'Mobilität und Balance erhalten. Geistig fit bleiben. Sicher in Ihrem Tempo trainieren.',
      metric: 'Alter 55+',
    },
    {
      title: 'Für Familien',
      body: 'Gemeinsam trainieren. Geteilte Werte aufbauen. Sonderpreise für mehrere Familienmitglieder.',
      metric: 'Familienrabatt',
    },
    {
      title: 'Für Wettkampf',
      body: 'Auf regionaler und nationaler Ebene antreten. Strukturiertes Training. Experten-Coaching.',
      metric: 'Wettkampfteam',
    },
  ]

  return (
    <Section>
      <Container>
        <Stack direction="vertical" gap="lg" align="center">
          <Headline level={2} align="center">
            Wer kann profitieren
          </Headline>
          <Subheadline align="center">
            Programme für jedes Alter und jedes Ziel
          </Subheadline>
          <Grid cols={3} gap="lg">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              body={useCase.body}
              metric={useCase.metric}
            />
          ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}
