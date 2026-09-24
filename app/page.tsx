import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/sections/hero'
import { Marquee } from '@/components/marquee'
import { Advantage } from '@/components/sections/advantage'
import { Capabilities } from '@/components/sections/capabilities'
import { Experience } from '@/components/sections/experience'
import { Process } from '@/components/sections/process'
import { CTA } from '@/components/sections/cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Advantage />
        <Capabilities />
        <Experience />
        <Process />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}
