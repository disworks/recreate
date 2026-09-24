const WORDS = ['distinct', 'discover', 'disrupt', 'disseminate', 'display']

export function Marquee() {
  const sequence = [...WORDS, ...WORDS, ...WORDS]

  return (
    <div className="relative overflow-hidden border-y border-border py-6">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
            {sequence.map((word, i) => (
              <span key={`${group}-${i}`} className="flex items-center">
                <span className="font-display px-6 text-3xl font-medium tracking-tight text-muted-foreground/70 md:text-4xl">
                  {word}
                </span>
                <span className="font-display text-3xl text-brand md:text-4xl">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
