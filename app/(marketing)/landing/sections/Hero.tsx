import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Stack from '@/components/structural/Stack'
import Grid from '@/components/structural/Grid'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import PrimaryButton from '@/components/actions/PrimaryButton'
import SecondaryButton from '@/components/actions/SecondaryButton'
import ImageBlock from '@/components/media/ImageBlock'

export default function Hero() {
  return (
    <Section>
      <Container>
        <Grid cols={2} gap="lg">
          <div>
            <Headline level={1} align="left">
              Meistern Sie traditionelles Karate in Neuhausen
            </Headline>
            <Stack direction="vertical" gap="md" align="left">
              <Subheadline align="left">
                Bauen Sie Stärke, Disziplin und Selbstverteidigungsfähigkeiten mit qualifizierten Trainern auf. Kurse für alle Altersgruppen und Niveaus.
              </Subheadline>
              <Stack direction="horizontal" gap="md" align="left">
                <PrimaryButton href="https://wa.me/491791226471" target="_blank" rel="noreferrer">
                  Jetzt anmelden
                </PrimaryButton>
                <SecondaryButton href="/trainingszeiten">
                  Trainingszeiten ansehen
                </SecondaryButton>
              </Stack>
            </Stack>
          </div>
          <div>
            <ImageBlock
              src="/placeholder-hero.jpg"
              alt="Schüler üben Kampfkunsttechniken im traditionellen Dojo"
              width={600}
              height={400}
              priority={true}
            />
          </div>
        </Grid>
      </Container>
    </Section>
  )
}
