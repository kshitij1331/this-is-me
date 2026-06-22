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
              <div key={group.id}>
                <button
                  type="button"
                  onClick={() => toggle(group.id)}
                  className="flex w-full items-center justify-between py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-white sm:text-xl">
                    {group.title}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
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
                      <div className="mb-6 rounded-[12px] bg-surface p-6 sm:p-8">
                        <p className="mb-6 text-sm leading-relaxed text-muted">
                          {group.description}
                        </p>
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-white/80"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {item}
                            </li>
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
