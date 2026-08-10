// import React from 'react';

import { Code2 } from "lucide-react";
import { motion } from "motion/react";

const display = { fontFamily: '"Space Grotesk", system-ui, sans-serif' } as const;
const mono = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' } as const;

const skills = ['Javascript', 'Typescript', 'Java', 'Node', 'Springboot', 'React', 'Bootstrap', 'Netsuite(oracle)', 'sql', 'MongoDB',]

export const AboutSection = () => {
  return (
    <section id="about" className="py-28">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p style={mono} className="mb-2 text-xl text-primary">/ about</p>
          <h2
            style={display}
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            A short note,
            <br />
            <span className="text-gradient">greatly expanded.</span>
          </h2>

          <div className="mt-10 grid grid-cols-3 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 * 0.1 }}
                className="glass-card rounded-2xl p-4 text-center"
              >
                <div style={display} className="text-3xl font-semibold text-foreground">  3</div>
                <div style={mono} className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">YEARS</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 * 0.1 }}
                className="glass-card rounded-2xl p-4 text-center"
              >
                <div style={display} className="text-3xl font-semibold text-foreground">800+</div>
                <div style={mono} className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">HOURS OF CODING</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 * 0.1 }}
                className="glass-card rounded-2xl p-4 text-center"
              >
                <div style={display} className="text-3xl font-semibold text-foreground">100%</div>
                <div style={mono} className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">CLEAN & DOCUMENTED CODE</div>
              </motion.div>
            
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="glass-card rounded-3xl p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Three years in, I still believe the best interfaces are the ones that feel
              completely effortless. I build web applications using React, TypeScript, 
              and Java, draw and prototype in Figma, and care a lot about clean code, 
              smooth UI, and business automation that genuinely saves people time.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Previously building front-end solutions and ERP automations at{" "}
              <span className="text-foreground font-medium">Netsoft</span>,{" "}
              <span className="text-foreground font-medium">Smartmetrics</span>, and 
              leading hands-on full-stack builds with Spring Boot.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  style={mono}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-foreground transition-colors hover:border-primary/50"
                >
                  <Code2 className="size-3 text-primary" />
                  {s}
                </span>
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
