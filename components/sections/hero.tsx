import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GridPattern } from "@/components/ui/grid-pattern"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <GridPattern
          width={36}
          height={36}
          x={-1}
          y={-1}
          squares={[
            [8, 2],
            [4, 6],
            [12, 4],
            [16, 10],
            [6, 14],
            [18, 6],
            [2, 10],
          ]}
          className={cn(
            "fill-primary/40 stroke-foreground/10",
            "[mask-image:radial-gradient(ellipse_at_top_left,white,transparent_68%)]"
          )}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-24 md:px-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl md:text-8xl">
            Bhumir Patel
          </h1>
          <p className="mt-6 max-w-xl text-xl tracking-tight text-foreground/80 md:text-2xl">
            Software developer
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
            I code mobile and web apps, from the screens people tap and click
            to the logic that keeps them working. I like taking an idea from a
            rough start to something clear, usable, and ready to ship.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
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
            <Button
              variant="secondary"
              size="lg"
              render={<a href="/resume.pdf" download />}
            >
              <Download data-icon="inline-start" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
