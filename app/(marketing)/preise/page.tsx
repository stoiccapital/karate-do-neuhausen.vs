import type { Metadata } from 'next'
import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Stack from '@/components/structural/Stack'
import Grid from '@/components/structural/Grid'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Paragraph from '@/components/content/Paragraph'
import ValueCard from '@/components/conversion/ValueCard'
import PrimaryButton from '@/components/actions/PrimaryButton'
import SecondaryButton from '@/components/actions/SecondaryButton'
import FAQItem from '@/components/conversion/FAQItem'

export const metadata: Metadata = {
  title: 'Preise & Mitgliedsbeiträge – Karate Do Neuhausen',
  description: 'Transparente Preise für alle Altersgruppen. Quartalsweise Beiträge: Kinder 45€, Erwachsene 60€. Keine versteckten Kosten. Starten Sie mit kostenloser Probestunde.',
  alternates: {
    canonical: 'https://www.karate-do-neuhausen.com/preise',
  },
}

export default function PreisePage() {
  return (
    <>
      {/* Hero / Intro Section */}
      <Section>
        <Container maxWidth="narrow">
          <Stack direction="vertical" gap="md" align="center">
            <Headline level={1} align="center">
              Einfache, transparente Preise
            </Headline>
            <Subheadline align="center">
              Quartalsweise Beiträge. Keine versteckten Kosten. Starten Sie mit einer kostenlosen Probestunde.
            </Subheadline>
            <PrimaryButton href="https://wa.me/491791226471" target="_blank" rel="noreferrer">
              Kostenlose Probestunde buchen
            </PrimaryButton>
          </Stack>
        </Container>
      </Section>

      {/* Pricing Grid Section */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="center">
            <Grid cols={2} gap="lg">
              <ValueCard
                title="Kinder unter 14 Jahren"
                body={
                  <Stack direction="vertical" gap="sm" align="left">
                    <Headline level={3} align="left">
                      45 €
                    </Headline>
                    <Paragraph align="left">
                      pro Quartal
                    </Paragraph>
                    <Paragraph>
                      Altersgerechtes Training für Anfänger und Fortgeschrittene. Perfekt für den Einstieg ins Karate.
                    </Paragraph>
                  </Stack>
                }
              />

              <ValueCard
                title="Ab 14 Jahren"
                body={
                  <Stack direction="vertical" gap="sm" align="left">
                    <Headline level={3} align="left">
                      60 €
                    </Headline>
                    <Paragraph align="left">
                      pro Quartal
                    </Paragraph>
                    <Paragraph>
                      Ideal für Jugendliche und Erwachsene. Alle Niveaus willkommen, von Anfänger bis Meister.
                    </Paragraph>
                  </Stack>
                }
              />
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container maxWidth="narrow">
          <Stack direction="vertical" gap="lg" align="center">
            <Headline level={2} align="center">
              Häufige Fragen zu den Preisen
            </Headline>
            <Stack direction="vertical" gap="md">
              <FAQItem
                question="Wie wird abgerechnet?"
                answer="Die Mitgliedsbeiträge werden quartalsweise (alle 3 Monate) erhoben. Sie erhalten eine Rechnung per E-Mail oder Post."
              />
              <FAQItem
                question="Gibt es eine Mindestlaufzeit?"
                answer="Nein. Sie können jederzeit kündigen. Eine Kündigung muss bis zum Ende des laufenden Quartals erfolgen."
              />
              <FAQItem
                question="Kann ich eine Probestunde machen?"
                answer="Ja. Ihre erste Stunde ist kostenlos. Kommen Sie einfach vorbei und probieren Sie das Training aus."
              />
              <FAQItem
                question="Gibt es Rabatte für Familien?"
                answer="Ja. Bei mehreren Familienmitgliedern gewähren wir einen Rabatt. Sprechen Sie uns direkt im Training an."
              />
            </Stack>
          </Stack>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section>
        <Container maxWidth="narrow">
          <Stack direction="vertical" gap="md" align="center">
            <Headline level={2} align="center">
              Bereit zum Start?
            </Headline>
            <Subheadline align="center">
              Buchen Sie Ihre kostenlose Probestunde. Keine Verpflichtung. Einfach ausprobieren.
            </Subheadline>
            <Stack direction="horizontal" gap="md" align="center">
              <PrimaryButton href="https://wa.me/491791226471" target="_blank" rel="noreferrer">
                Probestunde buchen
              </PrimaryButton>
              <SecondaryButton href="https://wa.me/491791226471" target="_blank" rel="noreferrer">
                Fragen stellen
              </SecondaryButton>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
