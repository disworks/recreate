import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const POINTS = [
  {
    title: 'Direct access',
    body: 'Senior practitioners from day one — not account layers reporting up to someone else.',
  },
  {
    title: 'Bespoke by design',
    body: 'Every engagement is shaped around what the project actually needs, not a standard package.',
  },
  {
    title: 'Scales around you',
    body: 'The team flexes up or down to the size and pace of the work, so it stays focused and hands-on.',
  },
]

export function Advantage() {
  return (
    <section id="why" className="mx-auto max-w-[1240px] px-6 py-28 md:py-36">
      <Reveal as="p" className="text-xs font-medium tracking-[0.28em] text-brand">
        01 — WHY DIS
      </Reveal>

      <div className="mt-8 grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal
            as="h2"
            className="font-display text-5xl font-bold tracking-tight md:text-6xl"
          >
            The advantage.
          </Reveal>
          <Reveal as="div" delay={80} className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              We deliberately stayed small so our impact could be large. DIS is a
              senior-led strike team. You work directly with practitioners who have
              spent two decades at the intersection of media, marketing and brand
              strategy.
            </p>
            <p>
              No hand-offs. No lost context. Just senior expertise — from the first
              meeting to the final metric.
            </p>
          </Reveal>
        </div>

        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border md:aspect-auto">
          <Image
            src="/images/knight.png"
            alt="A single chess knight on dark glass — strategy as a deliberate move"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 560px, 100vw"
          />
        </Reveal>
      </div>

      <div className="mt-20 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
        {POINTS.map((point, i) => (
          <Reveal
            key={point.title}
            delay={i * 100}
            className="bg-background p-8"
          >
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              {point.title}
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{point.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
