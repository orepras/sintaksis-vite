import { cn } from "../lib/utils";

type LogoItem = {
  src: string;
  alt: string;
  href?: string;
  // optional per-logo width/height if needed
  width?: number;
  height?: number;
};

type Speed = "slow" | "normal" | "fast";

const speedToDuration: Record<Speed, number> = {
  slow: 40,
  normal: 25,
  fast: 15,
};

interface ClientMarqueeProps {
  visible?: boolean;
  label?: string;
  items: LogoItem[];
  speed?: Speed;
  className?: string;
  /** When true, the whole strip stops on hover */
  pauseOnHover?: boolean;
}

/**
 * Accessible, toggleable marquee with “Clients and collaborators” label.
 * - Duplicates the row (2x) for seamless scrolling.
 * - Respects reduced motion.
 */
export function ClientMarquee({
  visible = false,
  label = "Clients and collaborators:",
  items,
  speed = "fast",
  pauseOnHover = true,
  className,
}: ClientMarqueeProps) {
  // If hidden, render a minimal “coming soon” stub to keep layout stable (optional).
  if (!visible) {
    return (
      <section
        aria-label="Clients and collaborators (hidden)"
        className={cn(
          "w-full overflow-hidden border-t border-b border-neutral-200 bg-neutral-50 text-neutral-700",
          className
        )}
      >
        <div className="mx-auto flex max-w-screen-2xl items-center gap-2 px-4 py-2 text-sm">
          <span className="font-medium opacity-70">{label}</span>
          <span className="opacity-50">coming soon</span>
        </div>
      </section>
    );
  }

  const duration = speedToDuration[speed];

  // Duplicate items for seamless loop
  const row = [...items, ...items];

  return (
    <section
      aria-label="Clients and collaborators"
      className={cn(
        "w-full select-none border-t border-b border-neutral-200 bg-neutral-50",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-screen-2xl gap-4 px-4",
          // Stack vertically on mobile, align inline on larger screens
          "flex-col items-start sm:flex-row sm:items-center",
          "py-2 text-sm text-neutral-700"
        )}
      >
        <span className="shrink-0 font-medium mb-2 sm:mb-0">{label}</span>

        <div
          className={cn(
            "relative w-full overflow-hidden",
            pauseOnHover && "group"
          )}
        >
          {/* The track is 200% width (because of duplication). We animate it left by 50%. */}
          <div
            className={cn(
              "flex w-[200%] items-center gap-6",
              "animate-marquee will-change-transform",
              // Pause on hover
              pauseOnHover && "group-hover:[animation-play-state:paused]",
              // Respect reduced motion
              "motion-reduce:animate-none"
            )}
            // Control speed via inline style (seconds)
            style={{ animationDuration: `${duration}s` }}
            aria-hidden="true" // decorative; logos are repeated below for screen readers
          >
            {row.map((logo, i) => (
              <Logo key={`${logo.src}-${i}`} item={logo} />
            ))}
          </div>

          {/* Visually hidden but screen-reader friendly single list (no duplication) */}
          <ul className="sr-only">
            {items.map((logo) => (
              <li key={logo.src}>{logo.alt}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Logo({ item }: { item: LogoItem }) {
  const img = (
    <img
      src={item.src}
      alt={item.alt}
      width={item.width ?? 96}
      height={item.height ?? 32}
      className="h-8 w-auto opacity-80 transition-opacity hover:opacity-100"
      loading="lazy"
      decoding="async"
    />
  );
  return item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center"
      aria-label={item.alt}
      title={item.alt}
    >
      {img}
    </a>
  ) : (
    img
  );
}