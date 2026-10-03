"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { buttonVariants } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const theme = resolvedTheme === "dark" ? "dark" : "light"

  return (
    <AnimatedThemeToggler
      className={buttonVariants({ variant: "outline", size: "icon" })}
      theme={mounted ? theme : "light"}
      onThemeChange={setTheme}
      disabled={!mounted}
    />
  )
}
