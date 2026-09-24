import { Reveal } from '@/components/reveal'

const STATS = [
  { value: '29+', label: 'Combined years of communications & marketing mastery' },
  { value: '20+', label: 'Years in media & communications' },
  { value: '9+', label: 'Years in integrated marketing communications' },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1240px] px-6 py-28 md:py-36">
      <Reveal as="p" className="text-xs font-medium tracking-[0.28em] text-brand">
        03 — EXPERIENCE
      </Reveal>

      <div className="mt-10 max-w-3xl">
        <Reveal as="p" className="font-display text-7xl font-bold tracking-tight md:text-8xl">
          29<span className="text-brand">+</span>
        </Reveal>
        <Reveal as="p" delay={80} className="mt-8 text-2xl leading-snug text-muted-foreground md:text-3xl">
          We&apos;ve navigated the evolution of media — from traditional press to the
          digital frontier. We don&apos;t guess; we architect.
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
        {STATS.map((stat, i) => (
          <Reveal key={stat.value} delay={i * 100} className="bg-background p-8">
            <p className="font-display text-5xl font-bold tracking-tight md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" className="mt-8 text-sm italic text-muted-foreground">
        Figures reflect the team&apos;s combined practitioner experience.
      </Reveal>
    </section>
  )
}
