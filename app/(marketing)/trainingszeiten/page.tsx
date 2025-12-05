import type { Metadata } from 'next'
import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Stack from '@/components/structural/Stack'
import Grid from '@/components/structural/Grid'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Paragraph from '@/components/content/Paragraph'
import ValueCard from '@/components/conversion/ValueCard'
import FeatureCard from '@/components/conversion/FeatureCard'
import PrimaryButton from '@/components/actions/PrimaryButton'
import SecondaryButton from '@/components/actions/SecondaryButton'
import ImageBlock from '@/components/media/ImageBlock'

export const metadata: Metadata = {
  title: 'Trainingszeiten – Karate Do Neuhausen e.V.',
  description: 'Feste Trainingszeiten für alle Altersgruppen und Gürtelstufen. Finden Sie die passende Gruppe für Kinder, Jugendliche und Erwachsene. Neueinsteiger jederzeit willkommen.',
  alternates: {
    canonical: 'https://www.karate-do-neuhausen.com/trainingszeiten',
  },
}

export default function TrainingszeitenPage() {
  return (
    <>
      {/* Section 1: Trainingszeiten Hero */}
      <Section>
        <Container maxWidth="standard">
          <Grid cols={2} gap="lg">
            <Stack direction="vertical" gap="md" align="left">
              <Headline level={1} align="left">Trainingszeiten</Headline>
              <Subheadline align="left">
                Feste Trainingszeiten, die zu Familien und Berufstätigen passen. Einfach, regelmäßig, verlässlich.
              </Subheadline>
              <Paragraph>
                Alle Gruppen haben feste Trainingszeiten. Neueinsteiger können jederzeit einsteigen – einfach zum passenden Termin vorbeikommen oder vorher Kontakt aufnehmen.
              </Paragraph>
              <Stack direction="horizontal" gap="md" align="left">
                <PrimaryButton href="https://wa.me/491791226471" target="_blank" rel="noreferrer">
                  Kostenloses Probetraining anfragen
                </PrimaryButton>
                <SecondaryButton href="/preise">
                  Preise ansehen
                </SecondaryButton>
              </Stack>
            </Stack>
            <div>
              <ImageBlock
                src="/placeholder-training.jpg"
                alt="Karate-Training im Dojo mit verschiedenen Altersgruppen"
                width={600}
                height={400}
                priority={true}
              />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Section 2: Überblick nach Gruppen */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">Wer trainiert wann?</Headline>
            <Paragraph>
              Alle Trainingszeiten auf einen Blick. Finden Sie die passende Gruppe für Ihr Alter und Ihr Niveau.
            </Paragraph>
            <Grid cols={4} gap="md">
              <ValueCard
                title="Kinder (6–13 Jahre)"
                body="Spielerisches Training mit Fokus auf Koordination, Grundlagen und Disziplin.

Donnerstag, 17:00–18:00 Uhr"
              />
              <ValueCard
                title="Jugendliche (14–17 Jahre)"
                body="Technisches Training mit wachsendem Anspruch und Vorbereitung auf Prüfungen.

Dienstag, 18:00–19:00 Uhr
Dienstag, 19:00–20:00 Uhr
Donnerstag, 18:00–19:00 Uhr"
              />
              <ValueCard
                title="Erwachsene Einsteiger"
                body="Training für alle, die neu ins Karate einsteigen oder Grundlagen festigen möchten.

Dienstag, 19:00–20:00 Uhr"
              />
              <ValueCard
                title="Erwachsene Fortgeschrittene"
                body="Intensives Training für höhere Gürtelstufen und Wettkampfvorbereitung.

Dienstag, 20:00–22:00 Uhr"
              />
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Section 3: Wöchentlicher Trainingsplan */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">Wöchentlicher Trainingsplan</Headline>
            <Paragraph>
              Die Trainingszeiten können an Feiertagen und während der Schulferien abweichen. Aktuelle Informationen finden Sie im Dojo oder per Kontakt.
            </Paragraph>
            <Grid cols={2} gap="md">
              <ValueCard
                title="Dienstag"
                body={
                  <Stack direction="vertical" gap="sm" align="left">
                    <Paragraph align="left">18:00–19:00 Uhr — Gruppe: Gürtel weiß / gelb</Paragraph>
                    <Paragraph align="left">19:00–20:00 Uhr — Gruppe: Gürtel gelb / orange / grün</Paragraph>
                    <Paragraph align="left">20:00–22:00 Uhr — Gruppe: Gürtel blau / braun / schwarz</Paragraph>
                  </Stack>
                }
              />
              <ValueCard
                title="Donnerstag"
                body={
                  <Stack direction="vertical" gap="sm" align="left">
                    <Paragraph align="left">17:00–18:00 Uhr — Gruppe: Gürtel weiß / gelb</Paragraph>
                    <Paragraph align="left">18:00–19:00 Uhr — Gruppe: Gürtel gelb / orange / grün</Paragraph>
                  </Stack>
                }
              />
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Section 4: Hinweise für Eltern & Neueinsteiger */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">Hinweise für Eltern & Einsteiger</Headline>
            <Paragraph>
              Wichtige Informationen für den ersten Besuch und den Trainingsstart. Das erste Training ist kostenlos und unverbindlich.
            </Paragraph>
            <Grid cols={4} gap="md">
              <ValueCard
                title="Wann kommen?"
                body="Kommen Sie am besten 10–15 Minuten vor Trainingsbeginn zum Dojo. So haben Sie Zeit, sich umzuziehen und die Trainer kennenzulernen."
              />
              <ValueCard
                title="Was mitbringen?"
                body="Bequeme Sportkleidung (Jogginghose, T-Shirt), Wasserflasche und Handtuch (optional). Karate-Anzüge (Gi) können später im Verein erworben werden."
              />
              <ValueCard
                title="Wie oft trainieren?"
                body="Am Anfang empfehlen wir 2 Mal pro Woche, um die Grundlagen zu erlernen. Später können Sie je nach Zeit und Interesse 2–3 Mal pro Woche kommen."
              />
              <ValueCard
                title="Für Eltern"
                body="Bei Kindern können Eltern gerne zuschauen. Das erste Training ist kostenlos und unverbindlich. Offenheit und Neugierde sind alles, was Sie brauchen."
              />
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Section 5: Ferien, Feiertage & besondere Termine */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">Ferien, Feiertage & besondere Termine</Headline>
            <Paragraph>
              Während der Schulferien und an Feiertagen kann der Trainingsplan abweichen oder es findet kein Training statt.
            </Paragraph>
            <Grid cols={3} gap="md">
              <ValueCard
                title="Schulferien"
                body="In Schulferien kann der Trainingsplan abweichen. Aktuelle Informationen finden Sie im Dojo-Aushang oder per Kontakt."
              />
              <ValueCard
                title="Feiertage"
                body="An Feiertagen findet in der Regel kein Training statt. Aktuelle Infos per Aushang im Dojo oder per Kontakt."
              />
              <ValueCard
                title="Aktuelle Infos"
                body="Bei Fragen einfach vorher anrufen oder eine E-Mail schreiben. Wir informieren Sie gerne über aktuelle Änderungen."
              />
            </Grid>
            <Stack direction="horizontal" gap="md" align="left">
              <SecondaryButton href="/contact">
                Aktuelle Infos anfragen
              </SecondaryButton>
            </Stack>
          </Stack>
        </Container>
      </Section>

      {/* Section 6: Nächster Schritt: Probetraining vereinbaren */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="md" align="left">
            <Headline level={2} align="left">Nächster Schritt: Probetraining vereinbaren</Headline>
            <Paragraph>
              Das erste Training ist kostenlos und unverbindlich. Sie können jederzeit zum passenden Termin vorbeikommen oder vorher Kontakt aufnehmen, damit wir Ihnen die richtige Gruppe empfehlen können.
            </Paragraph>
            <Stack direction="horizontal" gap="md" align="left">
              <PrimaryButton href="https://wa.me/491791226471" target="_blank" rel="noreferrer">
                Kostenloses Probetraining anfragen
              </PrimaryButton>
              <SecondaryButton href="/verein">
                Mehr über den Verein erfahren
              </SecondaryButton>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
