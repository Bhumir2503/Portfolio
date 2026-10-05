import { Section } from "@/components/sections/section"

export function About() {
  return (
    <Section>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        About
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
        A short note on who I am and the apps I build.
      </p>
      <div className="mt-8 max-w-2xl space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
        <p>
          I&apos;m a software developer. I code mobile and web apps, and I like
          taking an idea from a rough start to something clear, usable, and
          ready to ship.
        </p>
        <p>
          I studied computer science at Pellissippi State and the University of
          Tennessee, Knoxville, with a minor in math and machine learning. The
          work on this site is the kind of thing I build: mobile apps, web
          apps, and the pieces behind them.
        </p>
      </div>
    </Section>
  )
}
