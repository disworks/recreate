import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/10 blur-[160px]"
      />
      <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-[1240px] px-6 py-28 text-center md:py-40">
        <Reveal as="p" className="text-xs font-medium tracking-[0.28em] text-brand">
          05 — THE CONVERSATION
        </Reveal>

        <Reveal
          as="h2"
          className="font-display mx-auto mt-8 max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl"
        >
          Ready to say it <span className="italic text-brand">different?</span>
        </Reveal>

        <Reveal as="p" delay={80} className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Let&apos;s discuss your next strategic move. Tell us what you&apos;re working on.
        </Reveal>

        <Reveal
          delay={140}
          className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row"
        >
          <a
            href="mailto:hello@disworks.sg?subject=Project%20enquiry"
            className="group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-base font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
          >
            Talk to DIS
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-brand-foreground/15">
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
          <p className="max-w-xs text-sm text-muted-foreground">
            No packages. No layers. Just quality and experience at your fingertips.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
