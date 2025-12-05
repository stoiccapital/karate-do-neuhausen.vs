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
  title: 'Unsere Trainer – Karate Do Neuhausen e.V.',
  description: 'Erfahren Sie mehr über unsere erfahrenen Trainer: Rade Lazic (8. Dan, Cheftrainer) und Pero Lazic (7. Dan, Gründer). Höchste Qualifikationen für sicheres Training.',
  alternates: {
    canonical: 'https://www.karate-do-neuhausen.com/trainer',
  },
}

export default function TrainerPage() {
  return (
    <>
      {/* Section 1: Trainer Hero */}
      <Section>
        <Container maxWidth="standard">
          <Grid cols={2} gap="lg">
            <Stack direction="vertical" gap="md" align="left">
              <Headline level={1} align="left">Unsere Trainer</Headline>
              <Subheadline align="left">
                Erfahrene Trainer mit höchsten Qualifikationen. Sicherheit, Respekt und strukturiertes Training für alle Altersgruppen.
              </Subheadline>
              <Paragraph>
                Unser Trainerteam begleitet jedes Mitglied auf einem Weg, der technische Entwicklung, körperliche Fitness und mentale Stärke verbindet.
              </Paragraph>
              <Stack direction="horizontal" gap="md" align="left">
                <PrimaryButton href="https://wa.me/491791226471" target="_blank" rel="noreferrer">
                  Probetraining mit unserem Team vereinbaren
                </PrimaryButton>
                <SecondaryButton href="/trainingszeiten">
                  Trainingszeiten ansehen
                </SecondaryButton>
              </Stack>
            </Stack>
            <div>
              <ImageBlock
                src="/placeholder-trainers.jpg"
                alt="Trainerteam des Karate Do Neuhausen im Dojo"
                width={600}
                height={400}
                priority={true}
              />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Section 2: Trainerteam im Überblick — Philosophy in Cards */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">So arbeiten unsere Trainer</Headline>
            <Paragraph>
              Unser Trainerteam teilt eine gemeinsame Philosophie: respektvolles, strukturiertes Training, das sowohl für Kinder als auch für Erwachsene sicher und fördernd ist.
            </Paragraph>
            <Grid cols={4} gap="md">
              <ValueCard
                title="Kindgerechtes Training"
                body="Wir schaffen ein sicheres Umfeld, in dem Kinder spielerisch Koordination, Disziplin und Selbstvertrauen entwickeln können."
              />
              <ValueCard
                title="Klare Regeln & Respekt"
                body="Respekt vor dem Partner, den Trainern und dem Dojo steht im Mittelpunkt. Disziplin im Training mit klarer Struktur."
              />
              <ValueCard
                title="Sicherheit steht an erster Stelle"
                body="Wir achten auf korrekte Ausführung, Verletzungsprävention und ein sicheres Trainingsumfeld für alle Altersgruppen."
              />
              <ValueCard
                title="Spaß und Disziplin zugleich"
                body="Traditionelle Shotokan-Werte verbunden mit moderner Trainingsmethodik. Jeder trainiert im eigenen Tempo."
              />
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Section 3: Trainerkarten — Individual Trainers as Cards */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">Trainer & Verantwortliche</Headline>
            <Paragraph>
              Unsere Trainer verfügen über langjährige Erfahrung und höchste Qualifikationen. Jeder Trainer hat spezifische Verantwortungsbereiche und Schwerpunkte.
            </Paragraph>
            <Grid cols={2} gap="md">
              <FeatureCard
                title="Rade Lazic"
                body="8. Dan, Cheftrainer. Seit über drei Jahrzehnten im Karate aktiv. Leitet das Training seit 2013 mit Fokus auf technische Präzision, Disziplin und langfristige Entwicklung. Verantwortlich für Erwachsene Fortgeschrittene und technische Ausbildung."
                link={{
                  href: "/verein",
                  text: "Mehr über den Verein"
                }}
              />
              <FeatureCard
                title="Pero Lazic"
                body="7. Dan, Gründer des Vereins. Gründete den Verein im Jahr 2000 und prägte die Trainingskultur. Fokus auf traditionelle Shotokan-Techniken, Disziplin und Respekt. Unterstützt alle Gruppen und legt Wert auf korrekte Grundlagen."
                link={{
                  href: "/verein",
                  text: "Mehr über den Verein"
                }}
              />
              <ValueCard
                title="Assistenztrainer Team"
                body="Unterstützt werden die Haupttrainer durch ein engagiertes Team von Assistenztrainern, die regelmäßig Fortbildungen besuchen. Sie begleiten Kinder- und Jugendgruppen und helfen neuen Mitgliedern beim Einstieg."
              />
              <ValueCard
                title="Nachwuchstrainer"
                body="Junge Trainer in Ausbildung unterstützen das Team und sammeln praktische Erfahrung. Sie werden von den erfahrenen Trainern angeleitet und tragen zur Vielfalt des Trainings bei."
              />
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Section 4: Zuständigkeiten nach Gruppen — Responsibility Cards */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">Wer trainiert welche Gruppen?</Headline>
            <Paragraph>
              Unser Trainerteam arbeitet eng zusammen und unterstützt sich gegenseitig. Jeder Trainer hat spezifische Verantwortungsbereiche, aber alle Trainer können in verschiedenen Gruppen eingesetzt werden.
            </Paragraph>
            <Grid cols={4} gap="md">
              <ValueCard
                title="Kinder (6–13 Jahre)"
                body="Rade Lazic, Pero Lazic, Assistenztrainer Team. Fokus auf spielerisches Lernen, Koordination und kindgerechte Technikvermittlung."
              />
              <ValueCard
                title="Jugendliche (14–17 Jahre)"
                body="Rade Lazic, Pero Lazic, Assistenztrainer. Fokus auf technische Präzision, körperliche Kondition und mentale Stärke."
              />
              <ValueCard
                title="Erwachsene Einsteiger"
                body="Pero Lazic, Assistenztrainer. Strukturiertes Training mit Fokus auf korrekte Grundlagen und sichere Technikausführung."
              />
              <ValueCard
                title="Erwachsene Fortgeschrittene"
                body="Rade Lazic (Cheftrainer), Pero Lazic. Technische Ausbildung, fortgeschrittene Kata und Kumite, langfristige Entwicklung."
              />
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Section 5: Sicherheit & Qualifikationen — Trust Cards */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">Sicherheit & Qualifikationen</Headline>
            <Paragraph>
              Unsere Haupttrainer verfügen über höchste Dan-Graduierungen und jahrzehntelange Erfahrung. Verletzungsprävention und kindgerechtes Training stehen im Mittelpunkt unserer Arbeit.
            </Paragraph>
            <Grid cols={4} gap="md">
              <ValueCard
                title="Offizielle Lizenzen & Dan-Grade"
                body="Höchste Dan-Graduierungen (7. und 8. Dan) bei den Haupttrainern. Mitglieder anerkannter Karate-Verbände."
              />
              <ValueCard
                title="Erste-Hilfe & Notfalltraining"
                body="Erste-Hilfe-Kenntnisse im gesamten Trainerteam. Regelmäßige Auffrischung und Notfalltraining."
              />
              <ValueCard
                title="Fortbildungen & Lehrgänge"
                body="Regelmäßige Fortbildungen und Lehrgänge. Kontinuierliche Weiterentwicklung der Trainingsmethodik."
              />
              <ValueCard
                title="Erfahrung im Kinder- und Erwachsenentraining"
                body="Langjährige Erfahrung im Umgang mit Kindern, Jugendlichen und Erwachsenen. Fokus auf sichere Trainingsmethoden."
              />
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Section 6: Nächster Schritt: Trainer persönlich kennenlernen */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="md" align="left">
            <Headline level={2} align="left">Unsere Trainer persönlich kennenlernen</Headline>
            <Paragraph>
              Neueinsteiger und Kinder sind bei uns jederzeit willkommen. Das erste Training ist kostenlos und unverbindlich. Kommen Sie einfach zum passenden Termin vorbei oder nehmen Sie vorher Kontakt auf, damit wir Ihnen die richtige Gruppe empfehlen können.
            </Paragraph>
            <Stack direction="horizontal" gap="md" align="left">
              <PrimaryButton href="https://wa.me/491791226471" target="_blank" rel="noreferrer">
                Probetraining vereinbaren
              </PrimaryButton>
              <SecondaryButton href="/trainingszeiten">
                Trainingszeiten ansehen
              </SecondaryButton>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
