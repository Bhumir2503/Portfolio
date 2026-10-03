import type { SimpleIcon } from "simple-icons"
import { Database } from "lucide-react"
import {
  siFirebase,
  siGit,
  siGooglecloud,
  siKotlin,
  siNodedotjs,
  siNextdotjs,
  siPostgresql,
  siReact,
  siSupabase,
  siSwift,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
} from "simple-icons"

import { Section } from "@/components/sections/section"

const technologies: {
  name: string
  description: string
  icon: SimpleIcon | "aws" | "sql"
  color?: string
}[] = [
  { name: "SQL", description: "Query language", icon: "sql" },
  { name: "TypeScript", description: "JavaScript, with types", icon: siTypescript },
  { name: "React", description: "JavaScript library", icon: siReact },
  {
    name: "Next.js",
    description: "React framework",
    icon: siNextdotjs,
    color: "#737373",
  },
  { name: "Vue", description: "JavaScript framework", icon: siVuedotjs },
  { name: "Tailwind", description: "CSS framework", icon: siTailwindcss },
  { name: "Git", description: "Version control", icon: siGit },
  { name: "Node.js", description: "Backend", icon: siNodedotjs },
  {
    name: "React Native",
    description: "Mobile apps",
    icon: siReact,
    color: "#087EA4",
  },
  { name: "Swift", description: "iOS", icon: siSwift },
  { name: "Kotlin", description: "Android", icon: siKotlin },
  { name: "Supabase", description: "Backend platform", icon: siSupabase },
  { name: "PostgreSQL", description: "Relational database", icon: siPostgresql },
  { name: "Firestore", description: "NoSQL database", icon: siFirebase },
  { name: "AWS", description: "Cloud", icon: "aws" },
  { name: "GCP", description: "Cloud", icon: siGooglecloud },
]

function brandColor(icon: SimpleIcon | "aws" | "sql", color?: string) {
  if (color) return color
  if (icon === "aws") return "#FF9900"
  if (icon === "sql") return "#336791"
  return `#${icon.hex}`
}

function TechnologyIcon({
  icon,
  color,
}: {
  icon: SimpleIcon | "aws" | "sql"
  color?: string
}) {
  const tint = brandColor(icon, color)

  return (
    <span
      className="flex size-12 shrink-0 items-center justify-center rounded-xl"
      style={{ backgroundColor: `color-mix(in srgb, ${tint} 16%, transparent)` }}
    >
      {icon === "sql" ? (
        <Database className="size-6" style={{ color: tint }} aria-hidden="true" />
      ) : icon === "aws" ? (
        <span className="text-[11px] font-bold tracking-tight" style={{ color: tint }}>
          AWS
        </span>
      ) : (
        <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
          <path d={icon.path} fill={tint} />
        </svg>
      )}
    </span>
  )
}

export function Technologies() {
  return (
    <Section>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        Current technologies
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
        These are the main tools I use to build mobile and web apps.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {technologies.map((technology) => (
          <li
            key={technology.name}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
          >
            <TechnologyIcon icon={technology.icon} color={technology.color} />
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
