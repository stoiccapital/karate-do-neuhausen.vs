import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Grid from '@/components/structural/Grid'
import ValueCard from '@/components/conversion/ValueCard'

export default function ValueProps() {
  const values = [
    {
      title: 'Physical Fitness',
      body: 'Build strength, flexibility, and endurance through disciplined training.',
    },
    {
      title: 'Mental Discipline',
      body: 'Develop focus, self-control, and inner peace through martial arts practice.',
    },
    {
      title: 'Self-Defense',
      body: 'Learn practical techniques to protect yourself and others in real-world situations.',
    },
    {
      title: 'Character Development',
      body: 'Cultivate respect, humility, and perseverance as core values.',
    },
    {
      title: 'Community',
      body: 'Join a supportive community of like-minded individuals on the same path.',
    },
    {
      title: 'Tradition',
      body: 'Learn from authentic karate traditions passed down through generations.',
    },
  ]

  return (
    <Section>
      <Container>
        <Headline level={2} align="center">
          Why Choose Karate Do Neuhausen
        </Headline>
        <Subheadline align="center" className="mt-4">
          Discover the benefits of traditional karate training
        </Subheadline>
        <Grid cols={3} gap="lg" className="mt-12">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              body={value.body}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

