import {motion} from 'motion/react';

const display = { fontFamily: '"Space Grotesk", system-ui, sans-serif' } as const;
export const Menubar = () => {
  
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between py-8 "
    >
      <a href="#top" className="flex items-center gap-2.5 text-sm font-medium" style={display}>
        <span className="relative flex size-7 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur">
          <span className="inline-block size-2.5 rounded-full" style={{ background: "var(--gradient-primary)" }} />
        </span>
        ivonne.garcía
      </a>
      <nav className="hidden gap-8 text-sm sm:flex">
        <a href="#work" >
          Work
          {/* {active === "work" && <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />} */}
        </a>
        <a href="#about" >
          About
          {/* {active === "about" && <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />} */}
        </a>
        <a href="#contact">
          Contact
          {/* {active === "contact" && <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />} */}
        </a>
      </nav>
      <a
        href="#contact"
        className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-sm transition-all hover:border-primary/60 hover:bg-card/70"
      >
        Available
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
      </a>
    </motion.header>
  );
};
