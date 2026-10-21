const PRACTICE = ['Communications', 'Marketing', 'Media']
const EXPLORE = [
  { label: 'Why DIS', href: '#why' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: 'mailto:hello@disworks.sg?subject=Project%20enquiry' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-bold tracking-tight">
              DIS<span className="text-brand">.</span>
            </p>
            <p className="mt-3 text-xs tracking-[0.28em] text-muted-foreground">
              SAY IT DIFFERENT
            </p>
            <a
              href="https://instagram.com/disworks.sg"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow DIS on Instagram"
              className="mt-7 inline-flex items-center gap-2 text-sm text-foreground/90 transition-colors hover:text-brand"
            >
              <svg
                aria-hidden="true"
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              <span>Follow us on Instagram</span>
            </a>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.28em] text-muted-foreground">
              PRACTICE
            </p>
            <ul className="mt-5 space-y-3">
              {PRACTICE.map((item) => (
                <li key={item} className="text-foreground/90">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.28em] text-muted-foreground">
              EXPLORE
            </p>
            <ul className="mt-5 space-y-3">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-foreground/90 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 DIS — Communications, Marketing &amp; Media.</p>
          <p>Distinct · Discover · Disrupt · Disseminate · Display</p>
        </div>
      </div>
    </footer>
  )
}
