import { ArrowUpRight, ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-brand/15 blur-[140px]"
      />
      <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-40 md:pt-48">
        <p className="text-xs font-medium tracking-[0.28em] text-muted-foreground">
          A STRATEGIC STUDIO — COMMUNICATIONS · MARKETING · MEDIA
        </p>

        <h1 className="font-display mt-8 max-w-4xl text-balance text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          Say it <span className="italic text-brand">different.</span>
          <br />
          Or don&apos;t bother.
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-end">
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Most communication is just noise. We bring the strategy, story and media
            mastery to make sure your message doesn&apos;t just land — it stays.
          </p>

          <div className="flex flex-col gap-4 md:items-end">
            <a
              href="mailto:hello@disworks.sg?subject=Project%20enquiry"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="max-w-xs text-sm text-muted-foreground md:text-right">
              No packages. No layers. Just quality and experience at your fingertips.
            </p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-3 text-xs tracking-[0.28em] text-muted-foreground">
          SCROLL
          <ArrowDown className="size-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
