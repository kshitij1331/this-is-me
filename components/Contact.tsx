"use client";

import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[12px] border border-white/5 bg-surface p-8 sm:p-12 lg:p-16"
        >
          <h2 className="mb-4 text-3xl font-bold uppercase text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mb-10 max-w-xl text-base text-muted">
            Open to DevOps, cloud automation, and infrastructure engineering
            opportunities. Reach out via email or connect on LinkedIn.
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 rounded-[12px] border border-white/5 bg-black/50 px-5 py-4 text-sm text-white transition-colors hover:border-accent/30"
            >
              <Mail size={18} className="text-accent" />
              {personal.email}
            </a>
            <a
              href={`tel:${personal.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-[12px] border border-white/5 bg-black/50 px-5 py-4 text-sm text-white transition-colors hover:border-accent/30"
            >
              <Phone size={18} className="text-accent" />
              {personal.phone}
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[12px] bg-accent px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
            >
              <Linkedin size={18} />
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[12px] border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/30 hover:text-accent"
            >
              <Github size={18} />
              GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
