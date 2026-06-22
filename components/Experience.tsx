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
              className="group card-hover relative border-l border-white/10 pb-12 pl-8 last:pb-0 hover:border-accent/30 transition-all"
            >
              <motion.div 
                className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-accent group-hover:shadow-lg group-hover:shadow-accent/50"
                whileHover={{ scale: 1.5 }}
              />
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {role.company}
                  </p>
                  <p className="text-xs text-muted">{role.location}</p>
                </div>
                <span className="mt-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent sm:mt-0">
                  {role.period}
                </span>
              </div>
              <ul className="space-y-2">
                {role.bullets.map((bullet, bulletIndex) => (
                  <motion.li
                    key={bullet}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: bulletIndex * 0.05 }}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted group-hover:text-white/80 transition-colors"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30 group-hover:bg-accent transition-colors" />
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
