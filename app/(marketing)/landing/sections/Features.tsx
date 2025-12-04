import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Grid from '@/components/structural/Grid'
import FeatureCard from '@/components/conversion/FeatureCard'
import ImageBlock from '@/components/media/ImageBlock'

export default function Features() {
  const features = [
    {
      title: 'Beginner-Friendly Classes',
      body: 'Start your journey with classes designed for all skill levels, from complete beginners to advanced practitioners.',
      link: {
        href: '#classes',
        text: 'View Schedule',
      },
    },
    {
      title: 'Expert Instructors',
      body: 'Learn from certified masters with decades of experience in traditional karate and modern teaching methods.',
      link: {
        href: '#instructors',
        text: 'Meet Instructors',
      },
    },
    {
      title: 'Flexible Schedule',
      body: 'Choose from multiple class times throughout the week to fit your busy lifestyle.',
      link: {
        href: '#schedule',
        text: 'See Times',
      },
    },
  ]

  return (
    <Section>
      <Container>
        <Headline level={2} align="center">
          What We Offer
        </Headline>
        <Subheadline align="center" className="mt-4">
          Comprehensive karate training for everyone
        </Subheadline>
        <Grid cols={3} gap="lg" className="mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              body={feature.body}
              link={feature.link}
            />
          ))}
        </Grid>
        <div className="mt-16">
          <ImageBlock
            src="/placeholder-training.jpg"
            alt="Karate training session"
            width={1200}
            height={600}
          />
        </div>
      </Container>
    </Section>
  )
}

