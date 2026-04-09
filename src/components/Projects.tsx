"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative p-8 rounded-[2rem] glass-card h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <GithubIcon size={24} />
        </div>
        <div className="flex gap-3">
          {github && (
            <a href={github} target="_blank" className="p-2.5 rounded-full glass hover:bg-white/10 text-white/50 hover:text-white transition-all shadow-lg">
              <GithubIcon size={18} />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" className="p-2.5 rounded-full glass hover:bg-white/10 text-white/50 hover:text-white transition-all shadow-lg">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-white/50 text-sm mb-8 leading-relaxed flex-grow">{description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-white/40 group-hover:text-cyan-400/70 transition-colors">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#050505] relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              PROJECT <span className="text-gradient">FORGE</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 max-w-xl"
            >
              A selection of high-performance technical projects combining AI, automation, and full-stack architecture.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
