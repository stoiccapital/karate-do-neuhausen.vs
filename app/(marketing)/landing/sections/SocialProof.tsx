import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Grid from '@/components/structural/Grid'

export default function SocialProof() {
  const metrics = [
    { value: '500+', label: 'Active Students' },
    { value: '20+', label: 'Years Experience' },
    { value: '15+', label: 'Certified Instructors' },
    { value: '1000+', label: 'Graduates' },
  ]

  return (
    <Section>
      <Container>
        <Headline level={2} align="center">
          Trusted by the Community
        </Headline>
        <Subheadline align="center" className="mt-4">
          Join hundreds of students on their karate journey
        </Subheadline>
        <Grid cols={4} gap="lg" className="mt-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600">{metric.value}</div>
              <div className="text-gray-600 mt-2">{metric.label}</div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

