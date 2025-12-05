import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Stack from '@/components/structural/Stack'
import Headline from '@/components/content/Headline'
import Paragraph from '@/components/content/Paragraph'

export default function ImpressumPage() {
  return (
    <Section>
      <Container maxWidth="standard">
        <Stack direction="vertical" gap="lg" align="left">
          <Headline level={1} align="left">Impressum</Headline>

          <div>
            <Headline level={2} align="left">
              Rechtliche Informationen und Kontaktdaten
            </Headline>
            <Stack direction="vertical" gap="md" align="left">
              <Paragraph>
                Organisation: Karate Do Neuhausen e. V.
              </Paragraph>
              <Paragraph>
                Kontaktperson:
              </Paragraph>
              <Paragraph>
                Pero Lazic
              </Paragraph>
              <Paragraph>
                Tel.: +49 179 1226471
              </Paragraph>
            </Stack>
          </div>

          <div>
            <Headline level={2} align="left">
              Vorstand
            </Headline>
            <Stack direction="vertical" gap="md" align="left">
              <Paragraph>
                Anh Chu
              </Paragraph>
              <Paragraph>
                Lazar Drljevic
              </Paragraph>
            </Stack>
          </div>

          <div>
            <Headline level={2} align="left">
              Adresse
            </Headline>
            <Stack direction="vertical" gap="md" align="left">
              <Paragraph>
                Karate Do Neuhausen
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
            </Stack>
          </div>

          <div>
            <Headline level={2} align="left">
              Vereinsdaten
            </Headline>
            <Stack direction="vertical" gap="md" align="left">
              <Paragraph>
                Registernummer: VR 17176 München
              </Paragraph>
              <Paragraph>
                Umsatzsteuer-Identifikationsnummer: 143/217/80416 K47
              </Paragraph>
            </Stack>
          </div>

          <div>
            <Headline level={2} align="left">
              Bankverbindung
            </Headline>
            <Stack direction="vertical" gap="md" align="left">
              <Paragraph>
                Deutsche Bank PGK
              </Paragraph>
              <Paragraph>
                IBAN: DE05 7007 0024 0696 0140 00
              </Paragraph>
            </Stack>
          </div>
        </Stack>
      </Container>
    </Section>
  )
}
