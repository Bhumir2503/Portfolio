import { cn } from "@/lib/utils"

export function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("px-6 pt-20 pb-24 md:px-10", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
