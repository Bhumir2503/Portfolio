import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Exerkin",
}

export default function ExerkinPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-24">
      <p className="text-sm text-muted-foreground">Selected work</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        Exerkin
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
        Exerkin is a React Native app for keeping track of training. You can
        log workouts as you finish them, save routines so you can run them
        again, and watch your progress add up over time. I built it as a team
        project with three other people.
      </p>
    </main>
  )
}
