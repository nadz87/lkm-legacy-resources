import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { FEATURED_PROJECTS } from "../data/projects";

const FADE_IN = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
} as const;

const track = [...FEATURED_PROJECTS, ...FEATURED_PROJECTS];

export default function ProjectHighlightsMarquee() {
  return (
    <div className={cn("w-full bg-background")}>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {track.map((project, i) => (
            <a
              key={`${project.project}-${i}`}
              href={`project-highlight.html#${project.project}`}
              className="group relative aspect-[3/4] h-56 md:h-72 flex-shrink-0 overflow-hidden rounded-2xl shadow-md"
              style={{ rotate: `${i % 2 === 0 ? -1.5 : 2}deg` } as CSSProperties}
            >
              <img
                src={project.src}
                alt={`${project.title} — ${project.tag}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-white leading-tight">
                  {project.title}
                </p>
                <p className="text-xs text-white/80 leading-tight mt-0.5">{project.tag}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  View project <span aria-hidden>→</span>
                </span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      <motion.p
        initial="hidden"
        animate="show"
        variants={FADE_IN}
        transition={{ delay: 0.15 }}
        className="mt-8"
      >
        <a
          href="project-highlight.html"
          className="inline-flex items-center gap-2 font-semibold text-navy hover:text-accent-dark"
        >
          View all {FEATURED_PROJECTS.length} project highlights
          <span aria-hidden>→</span>
        </a>
      </motion.p>
    </div>
  );
}
