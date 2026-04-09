"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Cpu, Layout, Server, Database, Terminal, Settings } from "lucide-react";

const skillCategories = [
  { name: "Languages", key: "languages", icon: Terminal, color: "text-cyan-400" },
  { name: "Frontend", key: "frontend", icon: Layout, color: "text-blue-400" },
  { name: "Backend", key: "backend", icon: Server, color: "text-purple-400" },
  { name: "Database", key: "database", icon: Database, color: "text-emerald-400" },
  { name: "Expertise", key: "expertise", icon: Settings, color: "text-rose-400" },
  { name: "Other", key: "other", icon: Cpu, color: "text-yellow-400" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            TECHNICAL <span className="text-gradient">SKILLS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-xl"
          >
            A comprehensive overview of my technical stack and specialized expertise in AI and Full-Stack development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-[2rem]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${category.color} p-3 rounded-2xl bg-white/5`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {((RESUME_DATA.skills as Record<string, string[]>)[category.key] || []).map((skill: string) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-sm text-white/70 hover:border-cyan-400/30 hover:text-cyan-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
