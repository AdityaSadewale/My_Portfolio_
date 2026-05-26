"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Trophy, Medal, Target, Users } from "lucide-react";

const achievementIcons = [Trophy, Target, Users, Medal];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            NOTABLE <span className="text-gradient">ACHIEVEMENTS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-xl"
          >
            Recognitions for excellence in technology competitions and national-level sports.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESUME_DATA.achievements.map((ach, idx) => {
            const Icon = achievementIcons[idx % achievementIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 rounded-[2rem] border border-white/5 flex gap-6 group"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400 group-hover:scale-110 transition-transform flex-shrink-0 h-fit">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{ach.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{ach.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
