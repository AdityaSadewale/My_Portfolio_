"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            ACADEMIC <span className="text-gradient">FOUNDATION</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-xl"
          >
            My educational background in Computer Science and Engineering, focusing on AI and software architecture.
          </motion.p>
        </div>

        <div className="space-y-8">
          {RESUME_DATA.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-white/60 mb-2">{edu.institution}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-white/40">
                      <Calendar size={14} />
                      {edu.year}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gradient">{edu.score}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/20 mt-1">Aggregate Score</div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[60px] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
