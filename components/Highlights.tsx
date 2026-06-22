"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { highlights } from "@/lib/data";

export default function Highlights() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-hover rounded-[12px] border border-white/5 bg-gradient-to-br from-surface to-surface-light p-6 hover:border-accent/30"
            >
              <div className="mb-4 flex gap-1 group-hover:gap-2 transition-all">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05 + index * 0.1 }}
                  >
                    <Star
                      size={16}
                      className="fill-accent text-accent group-hover:drop-shadow-lg"
                      style={{ filter: 'drop-shadow(0 0 4px rgba(245, 197, 24, 0.5))' }}
                    />
                  </motion.div>
                ))}
              </div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-accent group-hover:text-accent-hover transition-colors">
                {item.metric}
              </p>
              <p className="text-sm leading-relaxed text-muted group-hover:text-white/90 transition-colors">
                &ldquo;{item.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
