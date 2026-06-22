"use client";

import { Award, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { certifications, education } from "@/lib/data";

export default function Certifications() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Award size={18} className="text-accent" />
              <span className="text-sm font-medium text-muted">
                Certifications
              </span>
            </div>
            <h2 className="mb-8 text-2xl font-bold uppercase text-white sm:text-3xl">
              Industry Credentials
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group card-hover rounded-[12px] border border-white/5 bg-gradient-to-r from-surface to-surface-light px-5 py-4 hover:border-accent/30"
                >
                  <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors">{cert.name}</p>
                  <p className="text-xs text-muted group-hover:text-white/70 transition-colors">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap size={18} className="text-accent" />
              <span className="text-sm font-medium text-muted">Education</span>
            </div>
            <h2 className="mb-8 text-2xl font-bold uppercase text-white sm:text-3xl">
              Academic Background
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group card-hover rounded-[12px] border border-white/5 bg-gradient-to-br from-surface to-surface-light p-6 hover:border-accent/30"
            >
              <p className="mb-1 text-lg font-semibold text-white group-hover:text-accent transition-colors">
                {education.degree}
              </p>
              <p className="mb-2 text-sm text-muted group-hover:text-white/70 transition-colors">{education.university}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-muted group-hover:text-white/60 transition-colors">{education.period}</span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent group-hover:bg-accent/20 transition-colors"
                >
                  CGPA: {education.cgpa}
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
