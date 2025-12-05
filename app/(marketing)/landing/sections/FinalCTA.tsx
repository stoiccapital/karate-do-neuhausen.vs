import Section from '@/components/structural/Section';
import Container from '@/components/structural/Container';
import Stack from '@/components/structural/Stack';
import Headline from '@/components/content/Headline';
import Paragraph from '@/components/content/Paragraph';
import PrimaryButton from '@/components/actions/PrimaryButton';

export default function FinalCTA() {
  return (
    <Section id="kontakt">
      <Container>
        <Stack direction="vertical" gap="lg" align="center">
          <Container maxWidth="narrow">
            <Stack direction="vertical" gap="md" align="center">
              <Headline level={2} align="center">
                Bereit, mit Karate zu starten?
              </Headline>
              <Paragraph align="center">
                Vereinbaren Sie ein unverbindliches Probetraining und lernen Sie unser Dojo,
                die Trainer und die Trainingsatmosphäre persönlich kennen.
              </Paragraph>
              <PrimaryButton href="/trainingszeiten">
                Probetraining vereinbaren
              </PrimaryButton>
            </Stack>
          </Container>
        </Stack>
      </Container>
    </Section>
  );
}
