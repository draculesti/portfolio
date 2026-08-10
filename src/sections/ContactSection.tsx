import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'motion/react';

const display = { fontFamily: '"Space Grotesk", system-ui, sans-serif' } as const;
const mono = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' } as const;

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[3rem]"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card relative rounded-[2rem] px-6 py-16 text-center sm:py-24"
      >
        <p style={mono} className="mb-3 text-xl text-primary">/ contact</p>
        <h2 style={display} className="mx-auto max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          Have an idea worth <span className="text-gradient">building</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-md text-muted-foreground">
          I'm currently open to new opportunities and collaborations. Let's make something remarkable.
        </p>
        <a
          href="mailto:garcia.murcio.ivonne@gmail"
          target="_blank"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all hover:scale-[1.03]"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          <Mail className="size-5" />
          garcia.murcio.ivonne@gmail
        </a>
        <div className="mt-10 flex items-center justify-center gap-6">
          <a href="https://github.com/draculesti" target="_blank" aria-label="GitHub" className="flex size-10 items-center justify-center rounded-full border border-border bg-card/50 transition-all hover:border-primary/60 hover:text-primary"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/ivonnegarciamurcio/" target="_blank" aria-label="LinkedIn" className="flex size-10 items-center justify-center rounded-full border border-border bg-card/50 transition-all hover:border-primary/60 hover:text-primary"><FaLinkedin size={24} /></a>
        </div>
      </motion.div>
    </section>
  )
}
