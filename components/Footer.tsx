import { personal } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted">
          &copy; {year} {personal.shortName} Choubey. All rights reserved.
        </p>
        <p className="text-xs text-muted">{personal.title}</p>
      </div>
    </footer>
  );
}
