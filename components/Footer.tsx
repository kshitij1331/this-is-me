import { personal } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-gradient-to-r from-black via-surface-light to-black px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted hover:text-white transition-colors cursor-pointer">
          &copy; {year} <span className="font-semibold text-accent">{personal.shortName} Choubey</span>. All rights reserved.
        </p>
        <p className="text-xs font-medium text-accent">{personal.title}</p>
      </div>
    </footer>
  );
}
