import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Maze Gen Solver",
}

export default function MazeGenSolverPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-24">
      <p className="text-sm text-muted-foreground">Selected work</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        Maze Gen Solver
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
        Maze Gen Solver builds a maze and then finds a way through it. You can
        generate a new layout, follow a path from the start, and keep going
        until you reach the exit.
      </p>
    </main>
  )
}
