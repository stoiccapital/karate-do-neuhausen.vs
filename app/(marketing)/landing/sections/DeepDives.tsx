import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Stack from '@/components/structural/Stack'
import Grid from '@/components/structural/Grid'
import Paragraph from '@/components/content/Paragraph'
import ImageBlock from '@/components/media/ImageBlock'

export default function DeepDives() {
  return (
    <Section>
      <Container>
        <Stack direction="vertical" gap="lg" align="center">
          <Headline level={2} align="center">
            Wie wir trainieren
          </Headline>
          <Subheadline align="center">
            Zwei Kernpraktiken, die vollständige Kampfkünstler aufbauen
          </Subheadline>
          <Stack direction="vertical" gap="lg">
            <Grid cols={2} gap="lg" className="items-center">
              <Stack direction="vertical" gap="md" align="left">
                <Headline level={3} align="left">
                  Kata-Training
                </Headline>
                <Paragraph align="left">
                  Meistern Sie präzise Bewegungen durch strukturierte Formen. Bauen Sie Muskelgedächtnis auf. Entwickeln Sie Technik, die zur zweiten Natur wird.
                </Paragraph>
              </Stack>
              <div>
                <ImageBlock
                  src="/placeholder-kata.jpg"
                  alt="Schüler führt vorgegebene Bewegungssequenzen aus, um Technik und Form zu entwickeln"
                  width={600}
                  height={400}
                />
              </div>
            </Grid>
            <Grid cols={2} gap="lg" className="items-center">
              <Stack direction="vertical" gap="md" align="left">
                <Headline level={3} align="left">
                  Kumite-Training
                </Headline>
                <Paragraph align="left">
                  Üben Sie echte Techniken im sicheren, kontrollierten Sparring. Lernen Sie Timing und Distanz. Wenden Sie Fähigkeiten unter Druck an.
                </Paragraph>
              </Stack>
              <div>
                <ImageBlock
                  src="/placeholder-kumite.jpg"
                  alt="Schüler üben kontrollierte Sparring-Techniken in überwachtem Trainingsumfeld"
                  width={600}
                  height={400}
                />
              </div>
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </Section>
  )
}
