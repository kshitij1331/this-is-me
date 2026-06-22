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
          className="card-hover rounded-[12px] border border-white/5 bg-gradient-to-br from-surface to-surface-light p-8 sm:p-12 lg:p-16"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold uppercase text-white sm:text-4xl lg:text-5xl"
          >
            Let&apos;s Build Something Together
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-10 max-w-xl text-base text-muted"
          >
            Open to DevOps, cloud automation, and infrastructure engineering
            opportunities. Reach out via email or connect on LinkedIn.
          </motion.p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 rounded-[12px] border border-white/5 bg-black/50 px-5 py-4 text-sm text-white transition-all hover:border-accent/30 hover:bg-accent/5 backdrop-blur-sm"
            >
              <Mail size={18} className="text-accent" />
              {personal.email}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${personal.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-[12px] border border-white/5 bg-black/50 px-5 py-4 text-sm text-white transition-all hover:border-accent/30 hover:bg-accent/5 backdrop-blur-sm"
            >
              <Phone size={18} className="text-accent" />
              {personal.phone}
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 197, 24, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[12px] bg-accent px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-accent-hover"
            >
              <Linkedin size={18} />
              LinkedIn
              <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[12px] border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-accent/30 hover:text-accent hover:bg-accent/5"
            >
              <Github size={18} />
              GitHub
              <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
