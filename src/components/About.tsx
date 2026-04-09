"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Trophy, Target, Cpu, Code } from "lucide-react";

export function About() {
  const bio = "Hi ! I'm Aditya Sadewale, a Full-Stack & AI Developer passionate about building AI-powered apps and automation tools.🏆 Hackathon Winner. I work with Python, MERN Stack, React, Node.js, and cloud technologies. Always learning, always building, and sharing projects on GitHub. 🚀";

  const points = [
    {
      title: "Current Status",
      content: "Fresher – Actively seeking Job & Internship opportunities in AI and MERN Stack development.",
      icon: Briefcase,
      color: "text-cyan-400"
    },
    {
      title: "Education",
      content: "B.Tech in Computer Science (2026). Currently maintaining a 7.2 CGPA at KIT, Pandharpur.",
      icon: GraduationCap,
      color: "text-purple-400"
    },
    {
      title: "The Disciplined Athlete",
      content: "National-level 10M Air Pistol shooter with 2 Gold & 2 Silver medals. Precision is my lifestyle.",
      icon: Target,
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-px bg-cyan-500" />
              <span className="text-xs font-black uppercase tracking-[0.5em] text-cyan-500">About Me</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white"
            >
              ENGINEERING <br />
              <span className="text-gradient">EXCELLENCE</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-12 xl:col-span-7 glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <User size={200} />
              </div>
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-8 relative z-10">
                {bio}
              </p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/50 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  OPEN TO WORK
                </div>
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/50 flex items-center gap-2">
                  <Trophy size={14} className="text-yellow-500" />
                  HACKTHON WINNER
                </div>
              </div>
            </motion.div>

            {/* Side Points */}
            <div className="lg:col-span-12 xl:col-span-5 grid grid-cols-1 gap-6">
              {points.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 rounded-[2rem] border border-white/5 flex gap-6 hover:border-white/10 transition-all"
                >
                  <div className={`${item.color} mt-1`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text- white font-bold mb-2 uppercase tracking-widest text-sm">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills & Tech Horizontal Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-12 glass p-8 rounded-[2rem] border border-white/5 flex flex-wrap items-center justify-between gap-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-500">
                  <Cpu size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Core Technology</div>
                  <div className="text-sm font-bold text-white/80">AI / MERN / Python /JavaScripts / React /</div>
                </div>
              </div>
              <div className="hidden md:block h-8 w-px bg-white/5" />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500">
                  <Code size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Front-End Mastery</div>
                  <div className="text-sm font-bold text-white/80">Next.js / Tailwind / UI-UX / n8n </div>
                </div>
              </div>
              <div className="hidden md:block h-8 w-px bg-white/5" />
              <div className="flex flex-1 justify-end">
                <a
                  href="#contact"
                  className="text-xs font-black uppercase tracking-[0.2em] px-8 py-3 bg-white text-black rounded-xl hover:bg-cyan-500 transition-all"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
