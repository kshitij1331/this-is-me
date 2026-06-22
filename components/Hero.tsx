"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { personal, tags } from "@/lib/data";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="px-6 pt-32 pb-16">
      <div className="mx-auto max-w-7xl">
        <div id="about" className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="group overflow-hidden rounded-[12px] border border-white/10 bg-surface card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src={personal.profileImage}
                alt={personal.name}
                width={480}
                height={560}
                className="h-auto w-full object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {personal.name}
            </h1>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-sm font-medium tracking-wide text-muted">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {personal.title}
            </p>

            <p className="text-base leading-relaxed text-muted lg:text-lg">
              {personal.summary}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-[12px] bg-accent px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/50"
            >
              Let&apos;s Connect
              <ArrowUpRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
