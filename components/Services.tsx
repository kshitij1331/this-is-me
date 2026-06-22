"use client";

import { useState } from "react";
import { ChevronDown, Crosshair } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Services() {
  const [openId, setOpenId] = useState(skillGroups[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center gap-2">
          <Crosshair size={18} className="text-accent" />
          <span className="text-sm font-medium text-muted">My Services</span>
        </div>
        <h2 className="mb-16 max-w-3xl text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
          Experience the Impact of Infrastructure Automation
        </h2>

        <div className="divide-y divide-white/10 border-t border-white/10">
          {skillGroups.map((group) => {
            const isOpen = openId === group.id;
            return (
              <div key={group.id} className="transition-all duration-300">
                <button
                  type="button"
                  onClick={() => toggle(group.id)}
                  className="group flex w-full items-center justify-between py-6 text-left hover:pl-2 transition-all duration-300"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-white sm:text-xl group-hover:text-accent transition-colors">
                    {group.title}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-accent transition-all duration-300 ${
                      isOpen ? "rotate-180" : "group-hover:translate-y-1"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mb-6 rounded-[12px] bg-gradient-to-br from-surface to-surface-light p-6 sm:p-8 card-hover border border-accent/10">
                        <p className="mb-6 text-sm leading-relaxed text-muted">
                          {group.description}
                        </p>
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {group.items.map((item) => (
                            <motion.li
                              key={item}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex items-start gap-2 text-sm text-white/80 group-hover:text-white transition-colors"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
