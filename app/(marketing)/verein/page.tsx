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
import FAQItem from '@/components/conversion/FAQItem'
import PrimaryButton from '@/components/actions/PrimaryButton'
import SecondaryButton from '@/components/actions/SecondaryButton'
import ImageBlock from '@/components/media/ImageBlock'

export const metadata: Metadata = {
  title: 'Der Verein – Karate Do Neuhausen e.V.',
  description: 'Gemeinnütziger Verein für traditionelles Shotokan-Karate seit 2000. Training für Kinder, Jugendliche und Erwachsene. Respekt, Disziplin und gemeinsame Entwicklung.',
  alternates: {
    canonical: 'https://www.karate-do-neuhausen.com/verein',
  },
}

export default function VereinPage() {
  return (
    <>
      {/* Section 1: Verein Hero */}
      <Section>
        <Container maxWidth="standard">
          <Grid cols={2} gap="lg">
            <Stack direction="vertical" gap="md" align="left">
              <Headline level={1} align="left">Unser Verein</Headline>
              <Subheadline align="left">
                Traditionelles Shotokan-Karate seit 2000. Eine Gemeinschaft, die Respekt, Disziplin und gemeinsame Entwicklung lebt.
              </Subheadline>
              <Paragraph>
                Der Karate Do Neuhausen e.V. ist ein gemeinnütziger Verein für traditionelles Shotokan-Karate. Wir bieten Training für Kinder, Jugendliche und Erwachsene.
              </Paragraph>
              <Stack direction="horizontal" gap="md" align="left">
                <PrimaryButton href="https://wa.me/491791226471" target="_blank" rel="noreferrer">
                  Probetraining im Verein vereinbaren
                </PrimaryButton>
                <SecondaryButton href="/trainingszeiten">
                  Trainingszeiten ansehen
                </SecondaryButton>
              </Stack>
            </Stack>
            <div>
              <ImageBlock
                src="/placeholder-dojo.jpg"
                alt="Karate-Dojo mit Trainierenden im traditionellen Shotokan-Stil"
                width={600}
                height={400}
                priority={true}
              />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Section 2: Verein in Kurzform — Fact Cards */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">Der Verein auf einen Blick</Headline>
            <Paragraph>
              Ein kurzer Überblick über unseren Verein, seine Geschichte und Ausrichtung.
            </Paragraph>
            <Grid cols={4} gap="md">
              <ValueCard
                title="Gründung & Standort"
                body="Gegründet am 18.12.2000 von Sensei Pero Lazic (7. DAN). Seit über 20 Jahren in Neuhausen aktiv."
              />
              <ValueCard
                title="Mitgliederstruktur"
                body="Training für Kinder ab 6 Jahren, Jugendliche und Erwachsene. Einsteiger und Fortgeschrittene sind willkommen."
              />
              <ValueCard
                title="Verband / Stilrichtung"
                body="Traditionelles Shotokan-Karate. Wir trainieren Kihon (Grundlagen), Kata (Formen) und Kumite (Partnerübungen)."
              />
              <ValueCard
                title="Trainingsschwerpunkt"
                body="Disziplin, Selbstverteidigung, Fitness und mentale Stärke. Respektvolles Training in sicherer Umgebung."
              />
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Section 3: Philosophie & Werte — Values in Cards */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">Unsere Philosophie & Werte</Headline>
            <Paragraph>
              Unser Verein steht für traditionelles Shotokan-Karate mit klaren Werten: Respekt, Disziplin und die kontinuierliche Arbeit an sich selbst.
            </Paragraph>
            <Grid cols={3} gap="md">
              <ValueCard
                title="Respekt & Fairness"
                body="Wir begegnen jedem Trainingspartner mit Achtung und Wertschätzung – unabhängig von Alter, Geschlecht oder Graduierung."
              />
              <ValueCard
                title="Disziplin & Konzentration"
                body="Konzentriertes Training, regelmäßige Teilnahme und die Bereitschaft, an sich zu arbeiten, sind Grundlagen unseres Dojos."
              />
              <ValueCard
                title="Spaß am gemeinsamen Training"
                body="Der Verein lebt von seinen Mitgliedern – von ihrem Engagement, ihrer Vielfalt und ihrem respektvollen Umgang miteinander."
              />
              <ValueCard
                title="Selbstvertrauen & innere Stärke"
                body="Karate stärkt nicht nur den Körper, sondern auch das Selbstvertrauen und die mentale Stärke. Jeder entwickelt sich im eigenen Tempo."
              />
              <ValueCard
                title="Tradition & moderne Pädagogik"
                body="Wir pflegen die traditionellen Shotokan-Techniken und Werte, während wir gleichzeitig modernes Training integrieren."
              />
              <ValueCard
                title="Gemeinschaft & Zusammenhalt"
                body="Wir feiern Erfolge gemeinsam, unterstützen uns gegenseitig und schaffen ein Umfeld, in dem jeder sich weiterentwickeln kann."
              />
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Section 4: Aufbau des Vereins & Leitung — Structure Cards */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">Aufbau des Vereins</Headline>
            <Paragraph>
              Unser Verein ist organisiert und strukturiert, um bestmögliches Training für alle Altersgruppen zu gewährleisten.
            </Paragraph>
            <Grid cols={4} gap="md">
              <FeatureCard
                title="Vorstand / Organisation"
                body="Gemeinnütziger Verein mit klarer Struktur. Seit 2013 leitet Rade Lazic (8. DAN) das Training und trägt maßgeblich zur Entwicklung bei."
                link={{
                  href: "/verein",
                  text: "Mehr erfahren"
                }}
              />
              <FeatureCard
                title="Trainerteam"
                body="Erfahrene Trainer mit höchsten Qualifikationen (7. und 8. Dan). Sicheres, strukturiertes Training für alle Gruppen."
                link={{
                  href: "/trainer",
                  text: "Trainer kennenlernen"
                }}
              />
              <ValueCard
                title="Kinder- & Jugendbereich"
                body="Spielerisches Training mit Fokus auf Koordination, Disziplin und Selbstvertrauen. Kindgerechte Methodik und sichere Umgebung."
              />
              <ValueCard
                title="Erwachsenenbereich"
                body="Training für Einsteiger und Fortgeschrittene. Fokus auf technische Präzision, Fitness, Selbstverteidigung und langfristige Entwicklung."
              />
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Section 5: Zielgruppen & Trainingsalltag — Groups / Day-to-day in Cards */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">Für wen ist unser Verein?</Headline>
            <Paragraph>
              Unser Verein ist offen für alle, die Freude am Karate und am gemeinsamen Training haben. Wir bieten Training für verschiedene Altersgruppen und Niveaus.
            </Paragraph>
            <Grid cols={4} gap="md">
              <ValueCard
                title="Kinder (6–13 Jahre)"
                body="Spielerisches Training mit Fokus auf Koordination, Disziplin und Selbstvertrauen. Kindgerechte Technikvermittlung in sicherer Umgebung."
              />
              <ValueCard
                title="Jugendliche (14–17 Jahre)"
                body="Technisches Training mit wachsendem Anspruch. Vorbereitung auf Prüfungen, Entwicklung von Konzentration und mentaler Stärke."
              />
              <ValueCard
                title="Erwachsene Einsteiger"
                body="Training ohne Vorkenntnisse. Fokus auf korrekte Grundlagen, Fitness und Selbstverteidigung. Jeder startet im eigenen Tempo."
              />
              <ValueCard
                title="Erwachsene Fortgeschrittene"
                body="Intensives Training für höhere Graduierungen. Technische Präzision, fortgeschrittene Kata und Kumite, Wettkampfvorbereitung."
              />
            </Grid>
            <Stack direction="vertical" gap="md" align="left">
              <Headline level={3} align="left">Trainingsalltag</Headline>
              <Grid cols={3} gap="md">
                <ValueCard
                  title="Ankunft & Begrüßung"
                  body="Jede Trainingseinheit beginnt mit einer kurzen Begrüßung und Aufwärmen. Neue Mitglieder werden herzlich willkommen geheißen."
                />
                <ValueCard
                  title="Aufwärmen & Technik"
                  body="Grundlagenübungen (Kihon) und Formen (Kata) stehen im Mittelpunkt. Die Trainer geben klare Anweisungen und korrigieren individuell."
                />
                <ValueCard
                  title="Partnerübungen / Kumite"
                  body="Partnerübungen und Kumite runden das Training ab. Sicherheit und respektvoller Umgang stehen dabei im Vordergrund."
                />
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </Section>

      {/* Section 6: Vereinsleben & Gemeinschaft — Community / Events */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">Vereinsleben & Gemeinschaft</Headline>
            <Paragraph>
              Unser Verein lebt von der Gemeinschaft seiner Mitglieder. Neben dem regelmäßigen Training organisieren wir verschiedene Veranstaltungen und Aktivitäten.
            </Paragraph>
            <Grid cols={4} gap="md">
              <FeatureCard
                title="Gürtelprüfungen"
                body="Regelmäßige Gürtelprüfungen für alle Graduierungen. Strukturierte Vorbereitung und faire Bewertung durch qualifizierte Prüfer."
              />
              <FeatureCard
                title="Lehrgänge & Workshops"
                body="Lehrgänge mit externen Trainern erweitern das Training. Fortbildungen für alle Altersgruppen und Niveaus."
              />
              <FeatureCard
                title="Gemeinsame Veranstaltungen"
                body="Vereinsfeste, Sommerfeste und gemeinsame Aktivitäten stärken die Gemeinschaft und schaffen Verbindungen über das Training hinaus."
              />
              <FeatureCard
                title="Aktive Mitgestaltung"
                body="Mitglieder können sich aktiv am Vereinsleben beteiligen und das Training sowie Veranstaltungen mitgestalten."
              />
            </Grid>
            <div>
              <ImageBlock
                src="/placeholder-group.jpg"
                alt="Gruppe von Karate-Trainierenden nach einer gemeinsamen Übung"
                width={1200}
                height={600}
              />
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Section 7: Mitglied werden — Onboarding cards + CTA */}
      <Section>
        <Container maxWidth="standard">
          <Stack direction="vertical" gap="lg" align="left">
            <Headline level={2} align="left">Mitglied werden</Headline>
            <Paragraph>
              So einfach startest du bei uns. Alle, die Freude am Karate und am gemeinsamen Training haben, sind willkommen.
            </Paragraph>
            <Grid cols={4} gap="md">
              <ValueCard
                title="1. Kostenloses Probetraining"
                body="Kostenloses Probetraining ist jederzeit möglich. Einfach im Training vorbeikommen oder vorher Kontakt aufnehmen."
              />
              <ValueCard
                title="2. Entscheidung in Ruhe treffen"
                body="Nach dem Probetraining können Sie in Ruhe entscheiden. Kein Druck, keine Verpflichtungen. Wir beraten gerne."
              />
              <ValueCard
                title="3. Mitgliedsantrag ausfüllen"
                body="Nach der Entscheidung können Sie sich direkt im Verein anmelden. Als gemeinnütziger Verein arbeiten wir transparent."
              />
              <ValueCard
                title="4. Regelmäßig teilnehmen & Fortschritte sehen"
                body="Mit regelmäßiger Teilnahme sehen Sie schnell Fortschritte. Wir begleiten Sie auf Ihrem Karate-Weg."
              />
            </Grid>
            <Stack direction="vertical" gap="md" align="left">
              <Headline level={3} align="left">Häufige Fragen</Headline>
              <Stack direction="vertical" gap="md" align="left">
                <FAQItem
                  question="Brauche ich Vorkenntnisse?"
                  answer="Nein, unser Training ist für Einsteiger und Fortgeschrittene geeignet. Wir beginnen mit den Grundlagen und entwickeln uns gemeinsam weiter."
                />
                <FAQItem
                  question="Was kostet die Mitgliedschaft?"
                  answer="Als gemeinnütziger Verein arbeiten wir mit transparenten Beiträgen. Details finden Sie auf unserer Preise-Seite oder sprechen Sie uns direkt im Training an."
                />
                <FAQItem
                  question="Kann ich einfach zum Probetraining kommen?"
                  answer="Ja, Sie können jederzeit zum Training kommen. Wir empfehlen jedoch, vorher kurz Kontakt aufzunehmen, damit wir Ihnen die passende Gruppe empfehlen können."
                />
              </Stack>
            </Stack>
            <Stack direction="horizontal" gap="md" align="left">
              <PrimaryButton href="https://wa.me/491791226471" target="_blank" rel="noreferrer">
                Probetraining vereinbaren
              </PrimaryButton>
              <SecondaryButton href="/preise">
                Preise ansehen
              </SecondaryButton>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
