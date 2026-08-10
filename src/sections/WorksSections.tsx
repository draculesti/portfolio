// import React from 'react';

import { CardProject } from "@/components/custom/CardProject";

const display = { fontFamily: '"Space Grotesk", system-ui, sans-serif' } as const;
const mono = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' } as const;

export const WorksSections = () => {
  return (
    <section id="work">
      <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="relative">
          <p style={mono} className="mb-2 text-xl text-primary">/ work</p>
          <h2 style={display} className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Selected <span className="text-gradient">projects</span>
          </h2>
          <div className="absolute -left-6 top-1/2 h-16 w-1 rounded-full bg-primary/30" />
        </div>
      </div>
      {CardProject(display, mono)}
      
    </section>
  )
}
