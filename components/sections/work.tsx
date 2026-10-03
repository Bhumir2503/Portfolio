import { Section } from "@/components/sections/section"

const projects = [
  {
    name: "Exerkin",
    description: "A fitness app for logging workouts, routines, and progress.",
    href: "https://github.com/Bhumir2503/Exerkin",
  },
  {
    name: "Maze Gen Solver",
    description: "Generate mazes and solve them with different algorithms.",
    href: "https://github.com/Bhumir2503/Maze-Gen-Solver",
  },
  {
    name: "GI Tract Segmentation",
    description: "Segment organs in medical images.",
    href: "https://github.com/Bhumir2503/GI-Tract-Organ-Segmentation",
  },
]

export function Work() {
  return (
    <Section>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        Selected work
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
        A few things I have built for mobile and the web.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-muted"
            >
              <h3 className="font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
