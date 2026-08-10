// import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const mono = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' } as const;


export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between gap-3 border-t border-border py-10 text-xs text-muted-foreground sm:flex-row" style={mono}>
      <span>© 2026 <span className="inline-block size-1.5 rounded-full bg-primary" /> Ivonne García</span>
      
      <span className="flex items-center gap-2">
        <a
          href="mailto:garcia.murcio.ivonne@gmail"
          target="_blank"
          className="flex size-10 items-center justify-center rounded-full border border-border bg-card/50 transition-all hover:border-primary/60 hover:text-primary"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          <Mail className="size-5" />
        </a>
        <a href="https://github.com/draculesti" target="_blank" aria-label="GitHub" className="flex size-10 items-center justify-center rounded-full border border-border bg-card/50 transition-all hover:border-primary/60 hover:text-primary"><FaGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/ivonnegarciamurcio/" target="_blank" aria-label="LinkedIn" className="flex size-10 items-center justify-center rounded-full border border-border bg-card/50 transition-all hover:border-primary/60 hover:text-primary"><FaLinkedin size={24} /></a>
      </span>
    </footer>
  )
}
