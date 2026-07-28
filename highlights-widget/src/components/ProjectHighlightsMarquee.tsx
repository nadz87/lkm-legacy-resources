import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { PROJECT_PHOTOS } from "../data/projects";

const FADE_IN = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
} as const;

const PORTFOLIO_URL = "https://www.lkmlegacyresources.com/portfolio-project-cleaning-service";

function splitRows<T>(items: T[]): [T[], T[]] {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

function MarqueeRow({
  photos,
  direction,
  duration,
}: {
  photos: typeof PROJECT_PHOTOS;
  direction: "left" | "right";
  duration: number;
}) {
  const track = [...photos, ...photos];
  const animate =
    direction === "left" ? { x: ["0%", "-50%"] } : { x: ["-50%", "0%"] };

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 w-max"
        animate={animate}
        transition={{ ease: "linear", duration, repeat: Infinity }}
      >
        {track.map((photo, i) => (
          <div
            key={`${photo.src}-${i}`}
            className="relative aspect-[3/4] h-40 md:h-52 flex-shrink-0 overflow-hidden rounded-2xl shadow-md"
            style={{ rotate: `${i % 2 === 0 ? -1.5 : 2}deg` } as CSSProperties}
          >
            <img
              src={photo.src}
              alt={`${photo.title} — ${photo.tag}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-white leading-tight">
                {photo.title}
              </p>
              <p className="text-[11px] text-white/80 leading-tight">{photo.tag}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ProjectHighlightsMarquee() {
  const [rowA, rowB] = splitRows(PROJECT_PHOTOS);

  return (
    <div className={cn("w-full bg-background")}>
      <motion.p
        initial="hidden"
        animate="show"
        variants={FADE_IN}
        className="max-w-2xl text-base md:text-lg text-muted-foreground"
      >
        From rope-access window cleaning at Hospital Pulau Pinang to healthcare
        janitorial service at Columbia Hospital Batu Kawan — a look inside the
        industrial, commercial, and healthcare sites LKM Legacy Resources keeps
        spotless across Penang and beyond.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="show"
        variants={FADE_IN}
        transition={{ delay: 0.15 }}
      >
        <a
          href={PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-semibold text-navy shadow-lg transition-colors hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          View Full Portfolio
          <span aria-hidden>→</span>
        </a>
      </motion.div>

      <div className="mt-10 flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <MarqueeRow photos={rowA} direction="left" duration={48} />
        <MarqueeRow photos={rowB} direction="right" duration={54} />
      </div>
    </div>
  );
}
