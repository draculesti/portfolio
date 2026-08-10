import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const display = { fontFamily: '"Space Grotesk", system-ui, sans-serif' } as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const word = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const HeroSection = () => {
  
  return (
    <section id="top" className="relative pt-16 pb-36 sm:pt-24 sm:pb-48">
      
      <div
        aria-hidden
        className="pointer-events-none absolute -top-8 right-0 select-none text-[8rem] font-bold leading-none tracking-tighter text-foreground/3 sm:text-[12rem] px-6"
      >
        IG
      </div>

      <motion.div initial="hidden" animate="show">
        <motion.div className="mb-8 inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs text-muted-foreground">
          <Sparkles className="size-3 text-primary" />
          Software engineer · México
        </motion.div>

        <motion.h1
          variants={container}
          style={display}
          className="text-4xl font-semibold leading-[0.95] tracking-tight sm:text-4xl lg:text-7xl"
        >
          <span className="block overflow-hidden pb-1">
            <motion.span variants={word} className="mr-[0.2em] inline-block">
              Building solutions,
            </motion.span>
          </span>

          <span className="block overflow-hidden pb-1">
            <motion.span  variants={word} className="mr-[0.2em] inline-block text-stroke">
              clean code
            </motion.span>

            <motion.span variants={word} className="text-shimmer mr-[0.2em] inline-block">
              & full stack systems.
            </motion.span>
          </span>
        </motion.h1>


        <motion.p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I'm Ivonne — Passionate about building end-to-end web applications and streamlining enterprise workflows. Dedicated to modern software design, and continuous learning.
        </motion.p>

        <motion.div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.03]"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            View selected work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm text-foreground transition-all hover:border-primary/60 hover:bg-card/70"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
