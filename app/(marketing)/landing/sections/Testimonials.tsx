import Section from '@/components/structural/Section'
import Container from '@/components/structural/Container'
import Headline from '@/components/content/Headline'
import Subheadline from '@/components/content/Subheadline'
import Grid from '@/components/structural/Grid'
import TestimonialCard from '@/components/conversion/TestimonialCard'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Karate Do Neuhausen has transformed my life. The discipline and focus I\'ve gained extends far beyond the dojo.',
      name: 'Sarah Müller',
      role: 'Student, 3 years',
      metric: 'Black Belt',
    },
    {
      quote: 'My son has grown so much in confidence and respect since joining. The instructors are patient and truly care about each student.',
      name: 'Michael Schmidt',
      role: 'Parent',
    },
    {
      quote: 'The best decision I made for my physical and mental health. The community here is like family.',
      name: 'Anna Weber',
      role: 'Student, 5 years',
      metric: '2nd Dan',
    },
  ]

  return (
    <Section>
      <Container>
        <Headline level={2} align="center">
          What Our Students Say
        </Headline>
        <Subheadline align="center" className="mt-4">
          Real experiences from our karate community
        </Subheadline>
        <Grid cols={3} gap="lg" className="mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              metric={testimonial.metric}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

