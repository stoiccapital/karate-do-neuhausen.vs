import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Stack from '@/components/structural/Stack'
import Headline from '@/components/content/Headline'
import Paragraph from '@/components/content/Paragraph'

export default function PrivacyPage() {
  return (
    <Section>
      <Container maxWidth="standard">
        <Stack direction="vertical" gap="lg" align="left">
          <Headline level={1} align="left">Datenschutzerklärung</Headline>

          <Stack direction="vertical" gap="md" align="left">
            <Headline level={2} align="left">
              Einleitung
            </Headline>
            <Paragraph>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie darüber, wie wir personenbezogene Daten erheben, verarbeiten und speichern.
            </Paragraph>
          </Stack>

          <Stack direction="vertical" gap="md" align="left">
            <Headline level={2} align="left">
              Verantwortliche Stelle
            </Headline>
            <Stack direction="vertical" gap="md" align="left">
              <Paragraph>
                Karate Do Neuhausen e. V.
              </Paragraph>
              <Paragraph>
                Winthirpl. 6
              </Paragraph>
              <Paragraph>
                80639 München
              </Paragraph>
              <Paragraph>
                Deutschland
              </Paragraph>
              <Paragraph>
                E-Mail: [optional]
              </Paragraph>
              <Paragraph>
                Telefon: +49 179 1226471
              </Paragraph>
            </Stack>
          </Stack>

          <Stack direction="vertical" gap="md" align="left">
            <Headline level={2} align="left">
              Erhebung und Speicherung personenbezogener Daten
            </Headline>
            <Paragraph>
              Wir verarbeiten personenbezogene Daten ausschließlich gemäß den geltenden gesetzlichen Bestimmungen. Dazu gehören:
            </Paragraph>
            <Stack direction="vertical" gap="md" align="left">
              <Paragraph>
                Name, Anschrift, Kontaktdaten
              </Paragraph>
              <Paragraph>
                Vereinsbezogene Daten (Mitgliedschaft, Teilnahme an Kursen)
              </Paragraph>
              <Paragraph>
                Kommunikationsdaten (E-Mails, Anfragen)
              </Paragraph>
            </Stack>
          </Stack>

          <Stack direction="vertical" gap="md" align="left">
            <Headline level={2} align="left">
              Zweck der Datenverarbeitung
            </Headline>
            <Paragraph>
              Wir verarbeiten personenbezogene Daten zu folgenden Zwecken:
            </Paragraph>
            <Stack direction="vertical" gap="md" align="left">
              <Paragraph>
                Verwaltung von Vereinsmitgliedschaften
              </Paragraph>
              <Paragraph>
                Organisation von Trainings, Kursen und Veranstaltungen
              </Paragraph>
              <Paragraph>
                Beantwortung von Kontaktanfragen
              </Paragraph>
              <Paragraph>
                Erfüllung gesetzlicher Verpflichtungen
              </Paragraph>
            </Stack>
          </Stack>

          <Stack direction="vertical" gap="md" align="left">
            <Headline level={2} align="left">
              Rechtsgrundlagen
            </Headline>
            <Paragraph>
              Die Verarbeitung erfolgt gemäß:
            </Paragraph>
            <Stack direction="vertical" gap="md" align="left">
              <Paragraph>
                Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
              </Paragraph>
              <Paragraph>
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse des Vereins)
              </Paragraph>
              <Paragraph>
                Art. 6 Abs. 1 lit. c DSGVO (gesetzliche Verpflichtungen)
              </Paragraph>
            </Stack>
          </Stack>

          <Stack direction="vertical" gap="md" align="left">
            <Headline level={2} align="left">
              Weitergabe von Daten
            </Headline>
            <Paragraph>
              Wir geben personenbezogene Daten grundsätzlich nicht an Dritte weiter, es sei denn:
            </Paragraph>
            <Stack direction="vertical" gap="md" align="left">
              <Paragraph>
                dies ist zur Erfüllung der Vereinszwecke erforderlich,
              </Paragraph>
              <Paragraph>
                eine gesetzliche Verpflichtung besteht, oder
              </Paragraph>
              <Paragraph>
                Sie haben ausdrücklich eingewilligt.
              </Paragraph>
            </Stack>
          </Stack>

          <Stack direction="vertical" gap="md" align="left">
            <Headline level={2} align="left">
              Speicherdauer
            </Headline>
            <Paragraph>
              Wir speichern personenbezogene Daten nur so lange, wie dies für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
            </Paragraph>
          </Stack>

          <Stack direction="vertical" gap="md" align="left">
            <Headline level={2} align="left">
              Rechte der Betroffenen
            </Headline>
            <Paragraph>
              Betroffene Personen haben folgende Rechte:
            </Paragraph>
            <Stack direction="vertical" gap="md" align="left">
              <Paragraph>
                Auskunft über gespeicherte Daten
              </Paragraph>
              <Paragraph>
                Berichtigung falscher Daten
              </Paragraph>
              <Paragraph>
                Löschung („Recht auf Vergessenwerden")
              </Paragraph>
              <Paragraph>
                Einschränkung der Verarbeitung
              </Paragraph>
              <Paragraph>
                Datenübertragbarkeit
              </Paragraph>
              <Paragraph>
                Widerspruch gegen die Verarbeitung
              </Paragraph>
            </Stack>
            <Paragraph>
              Zur Ausübung dieser Rechte wenden Sie sich bitte an die oben genannte Kontaktstelle.
            </Paragraph>
          </Stack>

          <Stack direction="vertical" gap="md" align="left">
            <Headline level={2} align="left">
              Datensicherheit
            </Headline>
            <Paragraph>
              Wir setzen technische und organisatorische Maßnahmen ein, um personenbezogene Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen.
            </Paragraph>
          </Stack>

          <Stack direction="vertical" gap="md" align="left">
            <Headline level={2} align="left">
              Änderungen dieser Datenschutzerklärung
            </Headline>
            <Paragraph>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle Version ist jederzeit auf unserer Website verfügbar.
            </Paragraph>
          </Stack>
        </Stack>
      </Container>
    </Section>
  )
}
