import { projects } from '@/data/projects';
import { ArrowUpRight, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export const CardProject = (display: React.CSSProperties, mono: React.CSSProperties) => {

  return (
    <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={p.repository}
              target="_blank"
              className="group gradient-border relative block overflow-hidden p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-card sm:p-8"
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `linear-gradient(135deg, oklch(0.82 0.17 175 / 0.15), transparent 70%)` }}
              />
              <div className="relative">
                <div className="mb-6 flex items-start justify-between">
                  <div
                    className="flex size-12 items-center justify-center rounded-2xl border border-border/60 bg-card/50 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-card"
                  >
                    <Layers className="size-5 text-primary" />
                  </div>
                  <span style={mono} className="text-sm text-muted-foreground">
                  
                  </span>
                </div>
                <h3 style={display} className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-gradient sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span key={t} style={mono} className="rounded-full border border-border bg-card/50 px-3 py-1 text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-1 text-sm text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>View case study </span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
  )
}
