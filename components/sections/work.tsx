import { ArrowUpRight } from "lucide-react"

import { Section } from "@/components/sections/section"

type Project = {
  name: string
  subtitle: string
  href: string
  github?: string
  image: string
}

const projects: Project[] = [
  {
    name: "FormQuarry",
    subtitle:
      "FormQuarry is a form backend you point your form at. Submissions hit an endpoint, and FormQuarry sends the email to the people who need to receive it.",
    href: "/formquarry",
    image: "/work/formquarry.svg",
  },
  {
    name: "Journpath",
    subtitle:
      "Journpath is an iOS-only itinerary planner for trips. You can store documents, find friends, and drop pins on the map for the places you want to visit. Invite other people to join the trip, and keep a checklist so nothing gets left behind.",
    href: "/journpath",
    github: "https://github.com/Bhumir2503/Journpath-ios",
    image: "/work/journpath.svg",
  },

  {
    name: "Exerkin",
    subtitle:
      "Exerkin is a React Native app for keeping track of training. You can log workouts as you finish them, save routines so you can run them again, and watch your progress add up over time. I built it as a team project with three other people.",
    href: "/exerkin",
    github: "https://github.com/Bhumir2503/Exerkin",
    image: "/work/exerkin.svg",
  },
  {
    name: "Maze Gen Solver",
    subtitle:
      "Maze Gen Solver builds a maze and then finds a way through it. You can generate a new layout, follow a path from the start, and keep going until you reach the exit.",
    href: "/maze-gen-solver",
    github: "https://github.com/Bhumir2503/Maze-Gen-Solver",
    image: "/work/maze-gen-solver.svg",
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
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
          >
            <a href={project.href}>
              <img
                src={project.image}
                alt=""
                className="aspect-video w-full object-cover"
              />
            </a>
            <div className="flex flex-1 flex-col p-5">
              <a href={project.href}>
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </a>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {project.subtitle}
              </p>
              <div className="mt-auto flex items-center justify-between pt-5">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium underline-offset-4 hover:underline"
                  >
                    GitHub
                  </a>
                ) : null}
                <a
                  href={project.href}
                  aria-label={`Open ${project.name}`}
                  className="ml-auto flex size-9 items-center justify-center rounded-md border border-border bg-background"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
