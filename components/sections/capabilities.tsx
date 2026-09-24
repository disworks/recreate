import { Reveal } from '@/components/reveal'

const CAPABILITIES = [
  {
    no: '01',
    title: 'Discover',
    tag: 'STRATEGY & MESSAGING',
    body: 'Uncovering the core truth of your brand and distilling it into a narrative that commands attention.',
  },
  {
    no: '02',
    title: 'Distinct',
    tag: 'BRAND & CREATIVE',
    body: 'Developing a visual and verbal identity that separates you from the category noise.',
  },
  {
    no: '03',
    title: 'Disseminate',
    tag: 'MEDIA & OUTREACH',
    body: 'Precision media relations and campaign execution that puts your story where it matters most.',
  },
  {
    no: '04',
    title: 'Display',
    tag: 'DIGITAL & SOCIAL',
    body: 'Managing your ecosystem so every touchpoint reinforces your strategic goals.',
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-[1240px] px-6 py-28 md:py-36">
      <Reveal as="p" className="text-xs font-medium tracking-[0.28em] text-brand">
        02 — CAPABILITIES
      </Reveal>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
        <Reveal
          as="h2"
          className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl"
        >
          One prefix.{' '}
          <span className="italic text-muted-foreground">Every verb in the work.</span>
        </Reveal>
        <Reveal as="p" delay={80} className="text-lg leading-relaxed text-muted-foreground">
          We work across strategy, brand, content and media — taking on bespoke
          assignments rather than selling standard packages. Here is when you would
          call us.
        </Reveal>
      </div>

      <div className="mt-16 border-t border-border">
        {CAPABILITIES.map((item, i) => (
          <Reveal
            key={item.no}
            delay={i * 60}
            className="group grid grid-cols-1 items-center gap-4 border-b border-border py-8 transition-colors hover:bg-foreground/[0.015] md:grid-cols-[80px_1.1fr_1fr_1.4fr] md:gap-8 md:py-10"
          >
            <span className="text-sm text-muted-foreground">{item.no}</span>
            <h3 className="font-display text-4xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-5xl">
              {item.title}
            </h3>
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
              {item.tag}
            </span>
            <p className="leading-relaxed text-muted-foreground">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
