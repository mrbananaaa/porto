import type React from "react"

type SectionProps = {
  children: React.ReactNode
}

export const Section = ({ children }: SectionProps) => {
  return <section className="md:flex md:items-center md:min-h-svh py-20 md:py-0">
    {children}
  </section>
}