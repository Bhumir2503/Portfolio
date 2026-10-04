"use client"

import type { FormEvent } from "react"

import { Section } from "@/components/sections/section"
import { Button } from "@/components/ui/button"

const fieldClassName =
  "mt-2 w-full rounded-md border border-border bg-card px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"

export function Contact() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <Section>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        Get in touch
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
        If you want to talk about a mobile or web app, send a message.
      </p>
      <form className="mt-8 grid w-full gap-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium" htmlFor="first-name">
            First name
            <input
              id="first-name"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              className={`${fieldClassName} h-10`}
            />
          </label>
          <label className="text-sm font-medium" htmlFor="last-name">
            Last name
            <input
              id="last-name"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              className={`${fieldClassName} h-10`}
            />
          </label>
        </div>
        <label className="text-sm font-medium" htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`${fieldClassName} h-10`}
          />
        </label>
        <label className="text-sm font-medium" htmlFor="message">
          Message
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className={`${fieldClassName} py-2`}
          />
        </label>
        <Button type="submit" size="lg" className="w-fit">
          Send
        </Button>
      </form>
    </Section>
  )
}
