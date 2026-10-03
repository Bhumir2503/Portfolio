import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Technologies } from "@/components/sections/technologies"
import { Work } from "@/components/sections/work"

export default function Home() {
  return (
    <main>
      <Hero />
      <Technologies />
      <Work />
      <Contact />
    </main>
  )
}
