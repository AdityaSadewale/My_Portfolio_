"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Award, CheckCircle2 } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            VERIFIED <span className="text-gradient">CERTIFICATIONS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-xl"
          >
            Professional milestones and skill validations from globally recognized institutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESUME_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-cyan-400/20 transition-all hover:translate-x-1 group"
            >
              <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} />
              </div>
              <div className="text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">
                {cert}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-[2rem] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <div className="flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-white/10 text-white">
                    <Award size={40} />
                </div>
                <div>
                   <h3 className="text-2xl font-bold italic">"Excellence is not an act, but a habit."</h3>
                   <p className="text-white/40">Continuously expanding my horizons through learning.</p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
