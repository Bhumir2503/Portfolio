import { Section } from "@/components/sections/section"

const technologies = [
  {
    name: "TypeScript",
    description: "JavaScript, with types",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          fill="#fff"
          d="M13.2 16.4v-1.1h2.1V8.7h1.5v6.6h2.1v1.1h-5.7Zm-6.4 0v-1.2l2.4-1.1c.5-.2.8-.5.8-.9 0-.4-.3-.7-.9-.7-.6 0-1 .3-1.1.8H6.4c.1-1.2 1.1-2 2.6-2 1.5 0 2.5.8 2.5 1.9 0 .8-.4 1.4-1.3 1.8l-2.2 1v.1h3.7v1.3H6.8Z"
        />
      </svg>
    ),
  },
  {
    name: "React",
    description: "JavaScript library",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="1">
          <ellipse cx="12" cy="12" rx="9.5" ry="3.6" />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.6"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.6"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    description: "React framework",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8" aria-hidden="true">
        <circle cx="12" cy="12" r="10" className="fill-foreground" />
        <path
          className="fill-background"
          d="M15.6 16.5 11.2 8.2H9.6v7.6h1.3v-5.4l4 6.1h.7Z"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    description: "CSS framework",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8" aria-hidden="true">
        <path
          fill="#06B6D4"
          d="M12 6c-2.7 0-4.4 1.3-5.2 4 1-1.3 2.2-1.8 3.6-1.5.8.2 1.4.8 2 1.4.9 1 2 2.1 4.3 2.1 2.7 0 4.4-1.3 5.2-4-1 1.3-2.2 1.8-3.6 1.5-.8-.2-1.4-.8-2-1.4C15.4 7.1 14.3 6 12 6Zm-5.2 6c-2.7 0-4.4 1.3-5.2 4 1-1.3 2.2-1.8 3.6-1.5.8.2 1.4.8 2 1.4.9 1 2 2.1 4.3 2.1 2.7 0 4.4-1.3 5.2-4-1 1.3-2.2 1.8-3.6 1.5-.8-.2-1.4-.8-2-1.4-1-1-2.1-2.1-4.3-2.1Z"
        />
      </svg>
    ),
  },
  {
    name: "React Native",
    description: "Mobile apps",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="#087EA4" />
        <g fill="none" stroke="#087EA4" strokeWidth="1">
          <ellipse cx="12" cy="12" rx="9.5" ry="3.6" />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.6"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.6"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    ),
  },
]

export function Technologies() {
  return (
    <Section>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        Current technologies
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
        These are the main tools I use to build mobile and web apps.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <li
            key={technology.name}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
          >
            {technology.icon}
            <div>
              <h3 className="font-semibold">{technology.name}</h3>
              <p className="text-sm text-muted-foreground">
                {technology.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
