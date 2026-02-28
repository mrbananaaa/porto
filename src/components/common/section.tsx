import type React from "react";

type SectionProps = {
  sectionID: string;
  children: React.ReactNode;
};

export const Section = ({ sectionID, children }: SectionProps) => {
  return (
    <section
      id={sectionID}
      className="md:flex md:items-center md:min-h-svh py-20 md:py-0"
    >
      {children}
    </section>
  );
};
