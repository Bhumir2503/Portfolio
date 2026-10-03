import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Journpath",
}

export default function JournpathPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-24">
      <p className="text-sm text-muted-foreground">Selected work</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        Journpath
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
        Journpath is an iOS-only itinerary planner for trips. You can store
        documents, find friends, and drop pins on the map for the places you
        want to visit. Invite other people to join the trip, and keep a
        checklist so nothing gets left behind.
      </p>
    </main>
  )
}
