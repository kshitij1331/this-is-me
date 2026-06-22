"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4">
          <span className="text-sm font-medium text-muted">
            Professional Experience
          </span>
        </div>
        <h2 className="mb-16 max-w-3xl text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
          Building Reliable Infrastructure at Scale
        </h2>

        <div className="relative space-y-0">
          {experience.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border-l border-white/10 pb-12 pl-8 last:pb-0"
            >
              <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-accent" />
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {role.title}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {role.company}
                  </p>
                  <p className="text-xs text-muted">{role.location}</p>
                </div>
                <span className="mt-2 text-sm font-medium text-muted sm:mt-0">
                  {role.period}
                </span>
              </div>
              <ul className="space-y-2">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
