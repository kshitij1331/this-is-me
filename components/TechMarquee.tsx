import { techStack } from "@/lib/data";

function MarqueeTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-16 pr-16"
      aria-hidden={ariaHidden}
    >
      {techStack.map((tech) => (
        <span
          key={tech}
          className="group text-lg font-semibold uppercase tracking-widest text-white/20 hover:text-accent/50 transition-all duration-300 cursor-default"
          style={{
            textShadow: 'hover ? 0 0 8px rgba(245, 197, 24, 0.2) : none'
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="overflow-hidden border-y border-white/5 bg-gradient-to-r from-transparent via-accent/5 to-transparent py-8">
      <div className="flex w-max animate-marquee">
        <MarqueeTrack />
        <MarqueeTrack ariaHidden />
      </div>
    </section>
  );
}
