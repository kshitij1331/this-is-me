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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold uppercase leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
            {personal.name.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-medium tracking-wide text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div
          id="about"
          className="mt-16 grid items-center gap-12 lg:grid-cols-2"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="overflow-hidden rounded-[12px] border border-white/10 bg-surface">
              <Image
                src={personal.profileImage}
                alt={personal.name}
                width={480}
                height={560}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              {personal.title}
            </p>
            <p className="mb-4 text-sm text-muted">{personal.location}</p>
            <p className="mb-8 text-base leading-relaxed text-muted lg:text-lg">
              {personal.summary}
            </p>
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-[12px] bg-accent px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
            >
              Let&apos;s Connect
              <ArrowUpRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
