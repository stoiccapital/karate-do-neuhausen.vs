import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Stack from '@/components/structural/Stack'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import PrimaryButton from '@/components/actions/PrimaryButton'
import SecondaryButton from '@/components/actions/SecondaryButton'
import ImageBlock from '@/components/media/ImageBlock'

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Headline level={1} align="left">
              Master the Art of Karate
            </Headline>
            <Subheadline align="left" className="mt-4">
              Join our community and discover the path to physical and mental excellence through traditional karate training.
            </Subheadline>
            <Stack direction="horizontal" gap="md" align="left" className="mt-8">
              <PrimaryButton href="#signup">
                Get Started
              </PrimaryButton>
              <SecondaryButton href="#learn-more">
                Learn More
              </SecondaryButton>
            </Stack>
          </div>
          <div>
            <ImageBlock
              src="/placeholder-hero.jpg"
              alt="Karate training"
              width={600}
              height={400}
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}

