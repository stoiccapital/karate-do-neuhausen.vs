import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Stack from '@/components/structural/Stack'
import PrimaryButton from '@/components/actions/PrimaryButton'
import SecondaryButton from '@/components/actions/SecondaryButton'

export default function FinalCTA() {
  return (
    <Section>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <Headline level={2} align="center">
            Ready to Begin Your Journey?
          </Headline>
          <Subheadline align="center" className="mt-4">
            Join us today and take the first step toward mastering karate. Your path to physical and mental excellence starts here.
          </Subheadline>
          <Stack direction="horizontal" gap="md" align="center" className="mt-8 justify-center">
            <PrimaryButton href="#signup">
              Start Training Today
            </PrimaryButton>
            <SecondaryButton href="#contact">
              Contact Us
            </SecondaryButton>
          </Stack>
        </div>
      </Container>
    </Section>
  )
}

