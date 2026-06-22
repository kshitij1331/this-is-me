"use client";

import { ArrowUpRight, Crosshair } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const secondary = projects.find((p) => !p.featured)!;

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center gap-2">
          <Crosshair size={18} className="text-accent" />
          <span className="text-sm font-medium text-muted">Featured Work</span>
        </div>

        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-2xl text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            Showcasing My Work for Your Inspiration
          </h2>
          <a
            href="https://github.com/kshitij1331"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-[12px] bg-accent px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
          >
            Explore all Projects
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-[12px] border border-white/5 bg-surface lg:row-span-2"
          >
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-surface-light to-black sm:h-64">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-32 items-center justify-center rounded-lg border border-white/10 bg-black/50">
                  <span className="text-2xl font-bold text-accent">CIS</span>
                </div>
                <p className="text-xs uppercase tracking-widest text-muted">
                  Compliance Scanner
                </p>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
                {featured.tech}
              </p>
              <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                {featured.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">
                {featured.description}
              </p>
              <ul className="mb-6 space-y-2">
                {featured.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-white/70"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={featured.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[12px] bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
              >
                View on GitHub
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="overflow-hidden rounded-[12px] border border-white/5 bg-surface"
          >
            <div className="flex h-40 items-center justify-center bg-gradient-to-br from-surface-light to-black">
              <div className="flex gap-3">
                {["TF", "K8s", "Git"].map((label) => (
                  <div
                    key={label}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-xs font-bold text-accent"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
                {secondary.tech}
              </p>
              <h3 className="mb-3 text-lg font-bold text-white">
                {secondary.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {secondary.description}
              </p>
              <a
                href={secondary.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                View on GitHub
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
