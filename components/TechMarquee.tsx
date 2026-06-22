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
          className="text-lg font-semibold uppercase tracking-widest text-white/20"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="overflow-hidden border-y border-white/5 py-8">
      <div className="flex w-max animate-marquee">
        <MarqueeTrack />
        <MarqueeTrack ariaHidden />
      </div>
    </section>
  );
}
