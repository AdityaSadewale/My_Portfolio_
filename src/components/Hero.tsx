"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Target, Cpu, Award } from "lucide-react";
import { TechSphere } from "./TechSphere";
import { RESUME_DATA } from "@/lib/data";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export function Hero() {
  const highlights = [
    { label: "RANK", value: "Hackthon Winner", icon: Award, color: "text-cyan-400" },
    { label: "PRECISION", value: "NATIONAL SHOOTER", icon: Target, color: "text-purple-500" },
    { label: "CORE", value: "AI & FULL-STACK", icon: Cpu, color: "text-emerald-400" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-[#050505]">
      {/* Background Aurora */}
      <TechSphere />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Minimalist Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.6em]">
              Digital Architect & Athlete
            </span>
          </motion.div>

          {/* Signature Name */}
          <div className="relative mb-12 select-none">
            <motion.h1
              className="text-6xl sm:text-8xl md:text-[12rem] font-black tracking-tighter leading-[0.8] mb-4 text-center flex flex-col items-center"
              initial="hidden"
              animate="visible"
            >
              <div className="flex overflow-hidden">
                {RESUME_DATA.name.split(" ")[0].split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { y: 100, opacity: 0 },
                      visible: { 
                        y: 0, 
                        opacity: 1,
                        transition: { 
                          duration: 0.8, 
                          ease: [0.33, 1, 0.68, 1],
                          delay: index * 0.05 
                        }
                      }
                    }}
                    whileHover={{ 
                      y: -20,
                      scale: 1.1,
                      color: "#22d3ee",
                      transition: { duration: 0.2 }
                    }}
                    className="inline-block text-white"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="flex mt-2">
                {RESUME_DATA.name.split(" ").slice(1).join(" ").split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { y: 100, opacity: 0 },
                      visible: { 
                        y: 0, 
                        opacity: 1,
                        transition: { 
                          duration: 0.8, 
                          ease: [0.33, 1, 0.68, 1],
                          delay: 0.5 + index * 0.05 
                        }
                      }
                    }}
                    whileHover={{ 
                      y: -20,
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    className="inline-block text-gradient text-outline hover:text-cyan-400 transition-colors"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.h1>
            
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              className="h-[2px] w-48 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto blur-[1px]"
            />
            
            {/* Ambient Glow behind name */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />
          </div>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/40 max-w-xl mx-auto mb-16 text-lg font-light leading-relaxed tracking-wide"
          >
            Bridging the gap between <span className="text-white font-medium">high-performance algorithms</span> and <span className="text-white font-medium">elite disciplinary focus</span>.
          </motion.p>

          {/* Ultra-Clean Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="px-6 py-3 rounded-full glass border border-white/5 flex items-center gap-3 backdrop-blur-3xl shadow-2xl"
              >
                <item.icon size={16} className={item.color} />
                <span className="text-white/80 text-[11px] font-bold tracking-widest uppercase">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Centered CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <a
              href="#projects"
              className="px-12 py-5 bg-white text-black font-black rounded-full flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-white/10 shadow-2xl group text-xs uppercase tracking-[0.2em]"
            >
              VIEW REPOSITORY
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-6">
              {[
                { icon: GithubIcon, href: RESUME_DATA.contact.github },
                { icon: LinkedinIcon, href: RESUME_DATA.contact.linkedin }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -5 }}
                  className="text-white/30 hover:text-white transition-all p-2"
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
