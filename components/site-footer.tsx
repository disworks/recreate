const PRACTICE = ['Communications', 'Marketing', 'Media']
const EXPLORE = [
  { label: 'Why DIS', href: '#why' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
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
