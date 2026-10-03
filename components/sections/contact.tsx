import { Section } from "@/components/sections/section"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <Section>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        Get in touch
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
        If you want to talk about a mobile or web app, you can reach me on
        GitHub.
      </p>
      <div className="mt-8">
        <Button
          size="lg"
          render={
            <a
              href="https://github.com/Bhumir2503"
              target="_blank"
              rel="noreferrer"
            />
          }
        >
          GitHub
        </Button>
      </div>
    </Section>
  )
}
