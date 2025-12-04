import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Grid from '@/components/structural/Grid'
import Paragraph from '@/components/content/Paragraph'

interface UseCaseCardProps {
  title: string
  body: string
  metric?: string
}

function UseCaseCard({ title, body, metric }: UseCaseCardProps) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <Paragraph align="left">{body}</Paragraph>
      {metric && (
        <div className="mt-4 text-sm text-gray-600">
          {metric}
        </div>
      )}
    </div>
  )
}

export default function UseCases() {
  const useCases = [
    {
      title: 'For Children',
      body: 'Build confidence, discipline, and respect while learning self-defense in a safe, structured environment.',
      metric: 'Ages 6-12',
    },
    {
      title: 'For Teens',
      body: 'Develop focus, goal-setting skills, and physical fitness while preparing for life\'s challenges.',
      metric: 'Ages 13-17',
    },
    {
      title: 'For Adults',
      body: 'Maintain fitness, reduce stress, and learn practical self-defense techniques for everyday life.',
      metric: 'Ages 18+',
    },
    {
      title: 'For Seniors',
      body: 'Improve balance, flexibility, and mental sharpness through gentle, age-appropriate training.',
      metric: 'Ages 55+',
    },
    {
      title: 'For Families',
      body: 'Train together and strengthen family bonds while sharing a meaningful activity.',
      metric: 'Family Discounts',
    },
    {
      title: 'For Competition',
      body: 'Compete at regional and national levels with specialized training programs.',
      metric: 'Competition Team',
    },
  ]

  return (
    <Section>
      <Container>
        <Headline level={2} align="center">
          Who Can Benefit
        </Headline>
        <Subheadline align="center" className="mt-4">
          Karate training for every stage of life
        </Subheadline>
        <Grid cols={3} gap="lg" className="mt-12">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              body={useCase.body}
              metric={useCase.metric}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

