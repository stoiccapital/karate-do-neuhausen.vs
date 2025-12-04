import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Stack from '@/components/structural/Stack'
import Paragraph from '@/components/content/Paragraph'
import ImageBlock from '@/components/media/ImageBlock'

export default function DeepDives() {
  return (
    <Section>
      <Container>
        <Headline level={2} align="center">
          Our Training Philosophy
        </Headline>
        <Subheadline align="center" className="mt-4">
          Understanding the depth of traditional karate
        </Subheadline>
        <div className="mt-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Headline level={3} align="left">
                Kata Practice
              </Headline>
              <Paragraph align="left" className="mt-4">
                Kata are pre-arranged sequences of movements that teach proper form, technique, and application. Through consistent kata practice, students develop muscle memory, balance, and understanding of combat principles.
              </Paragraph>
            </div>
            <div>
              <ImageBlock
                src="/placeholder-kata.jpg"
                alt="Kata practice"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <Headline level={3} align="left">
                Kumite Training
              </Headline>
              <Paragraph align="left" className="mt-4">
                Controlled sparring sessions allow students to apply techniques in a safe, supervised environment. Kumite develops timing, distance control, and practical self-defense skills while maintaining respect and discipline.
              </Paragraph>
            </div>
            <div className="lg:order-1">
              <ImageBlock
                src="/placeholder-kumite.jpg"
                alt="Kumite training"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

