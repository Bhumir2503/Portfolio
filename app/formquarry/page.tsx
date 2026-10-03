import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FormQuarry",
}

export default function FormQuarryPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-24">
      <p className="text-sm text-muted-foreground">Selected work</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        FormQuarry
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
        FormQuarry is a form backend you point your form at. Submissions hit
        an endpoint, and FormQuarry sends the email to the people who need to
        receive it.
      </p>
    </main>
  )
}
