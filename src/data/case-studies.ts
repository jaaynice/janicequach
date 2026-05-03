export interface CaseStudy {
  slug: string
  label: string
  title: string
  client?: string
  problem: string
  approach: string
  outcome: string
  metric?: string
  heroImage?: string
  images?: string[]
}

/**
 * Placeholder case studies — Janice replaces content with real work.
 * Slugs match create page card order: systems, product, visual.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'systems',
    label: '01 systems',
    title: 'Build the system, not the screen',
    client: 'ClickView',
    problem:
      'Eight designers, no shared language. Every screen was a negotiation. Components existed but nobody trusted them — the system had grown organically and nobody could explain the rules.',
    approach:
      'Audited every component in production. Mapped the gaps between what Figma said and what shipped. Rebuilt the token architecture from scratch — spacing, colour, typography — then worked with engineering to align implementation. Ran weekly system reviews until the team could self-govern.',
    outcome:
      'Design system became the source of truth. New screens went from concept to dev-ready in half the time. Designers stopped reinventing and started composing.',
    metric: '50% reduction in design-to-dev handoff time',
    heroImage: '/work/systems.svg',
  },
  {
    slug: 'product',
    label: '02 product',
    title: 'Complexity made invisible',
    client: 'ClickView',
    problem:
      'Teachers had 15 minutes between classes. The product asked them to navigate six screens to do one thing. Usage data showed drop-off at step three.',
    approach:
      "Observed teachers in classrooms. Mapped the real workflow — not the product's workflow. Collapsed six screens into two. Moved the most common action to the first thing they see. Tested with five schools before shipping.",
    outcome:
      'Task completion went up. Support tickets for that flow went down. Teachers stopped describing the product as "powerful but hard."',
    metric: 'Task completion rate increased from 34% to 78%',
    heroImage: '/work/product.svg',
  },
  {
    slug: 'visual',
    label: '03 visual',
    title: 'Draw it to see it',
    problem:
      'Cross-functional alignment meetings produced agreement but not understanding. Everyone nodded, then built different things.',
    approach:
      'Started drawing the system — not wireframes, but relationship maps. Who talks to whom. What data flows where. What breaks when this changes. Shared the diagrams before the meeting, not after.',
    outcome:
      "Meetings got shorter. Disagreements surfaced earlier. The drawings became the shared language the team didn't know they were missing.",
    heroImage: '/work/visual.svg',
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
