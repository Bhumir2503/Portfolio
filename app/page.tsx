import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Technologies } from "@/components/sections/technologies"
import { Work } from "@/components/sections/work"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Work />
      <Contact />
    </main>
  )
}
