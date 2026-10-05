import { Section } from "@/components/sections/section"

const schools = [
  {
    name: "University of Tennessee, Knoxville",
    credential:
      "B.S. in Computer Science, minor in Math and Machine Learning",
    gpa: "3.42",
    logo: "/experience/utk.svg",
    courses: [
      "Data Structures",
      "Algorithms",
      "Systems Programming",
      "Machine Learning",
      "Linear Algebra",
      "Calculus",
    ],
    summary:
      "I studied computer science here and added a minor in math and machine learning. The work moved from data structures and algorithms into systems programming, and into how models learn from data.",
  },
  {
    name: "Pellissippi State Community College",
    credential: "A.S. in Computer Science",
    logo: "/experience/pellissippi.png",
    courses: [
      "Computer Science I",
      "Computer Science II",
      "Discrete Structures",
      "Calculus I",
    ],
    summary:
      "I earned an associate degree in computer science here. The classes covered programming fundamentals, discrete structures, and calculus.",
  },
]

export function Experience() {
  return (
    <Section>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        Experience
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
        Computer science at Tennessee and Pellissippi State.
      </p>
      <ul className="mt-10 flex flex-col gap-4">
        {schools.map((school) => (
          <li
            key={school.name}
            className="flex items-start gap-5 rounded-2xl border border-border bg-card p-5 sm:gap-6 sm:p-6"
          >
            <img
              src={school.logo}
              alt=""
              className="size-16 shrink-0 object-contain sm:size-20"
            />
            <div className="min-w-0">
              <h3 className="text-lg font-semibold sm:text-xl">{school.name}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground sm:text-base">
                {school.credential}
                {school.gpa ? ` · GPA ${school.gpa}` : ""}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {school.courses.map((course) => (
                  <li
                    key={course}
                    className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {course}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {school.summary}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
