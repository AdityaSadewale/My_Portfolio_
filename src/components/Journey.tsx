"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Rocket, Star, Code, Award, GraduationCap } from "lucide-react";

const icons = [Code, Star, Award, Rocket, GraduationCap];

export function Journey() {
  return (
    <section id="journey" className="py-24 relative z-10 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            LEARNING <span className="text-gradient">JOURNEY</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-xl mx-auto"
          >
            A chronological visualization of my evolution as a developer and AI enthusiast.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/10 hidden md:block" />
          
          <div className="space-y-12 md:space-y-24">
            {RESUME_DATA.journey.map((item, idx) => {
              const Icon = icons[idx % icons.length];
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`w-full md:w-[45%] ${isEven ? "text-right" : "text-left"}`}>
                    <div className={`p-8 rounded-[2rem] glass border border-white/5 relative group transition-all duration-500 hover:border-cyan-400/20`}>
                      <div className="text-3xl font-black text-white/10 absolute top-4 right-8 select-none group-hover:text-cyan-400/10 transition-colors">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{item.year} Milestone</h3>
                      <p className="text-white/50 leading-relaxed font-medium">
                        {item.event}
                      </p>
                      
                      <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? "-right-3" : "-left-3"} w-6 h-6 rotate-45 glass border border-white/5 hidden md:block`} />
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="relative z-10 w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                    <Icon size={24} />
                  </div>

                  <div className="w-full md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
