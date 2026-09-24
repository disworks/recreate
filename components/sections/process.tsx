import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    no: '01',
    title: 'The Diagnosis',
    body: 'We start with strategy — identifying the friction in your current communication before anything else. No execution until the thinking is right.',
  },
  {
    no: '02',
    title: 'The Architecture',
    body: 'We shape a bespoke engagement, scaling the team to fit the actual size and pace of your project — not the other way around.',
  },
  {
    no: '03',
    title: 'The Impact',
    body: 'Hands-on from strategy through delivery. We stay in the trenches with you until the objective is met.',
  },
]

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1240px] px-6 py-28 md:py-36">
      <Reveal as="p" className="text-xs font-medium tracking-[0.28em] text-brand">
        04 — HOW WE WORK
      </Reveal>

      <Reveal
        as="h2"
        className="font-display mt-8 max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl"
      >
        Strategy first.
        <br />
        <span className="text-muted-foreground">Then the shape of the work.</span>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
        {STEPS.map((step, i) => (
          <Reveal key={step.no} delay={i * 100} className="bg-background p-8 md:p-10">
            <p className="font-display text-5xl font-bold tracking-tight text-brand md:text-6xl">
              {step.no}
            </p>
            <h3 className="font-display mt-8 text-2xl font-semibold tracking-tight">
              {step.title}
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
