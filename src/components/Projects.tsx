"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { RESUME_DATA, FEATURED_PROJECTS } from "@/lib/data";

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

// Featured / Master Works Card
function FeaturedCard({ project, index }: { project: typeof FEATURED_PROJECTS[0]; index: number }) {
  const isLarge = index === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 ${isLarge ? "md:col-span-2" : ""}`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      {/* Live badge */}
      {project.demo && (
        <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Live</span>
        </div>
      )}

      <div className="p-8 relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <GithubIcon size={20} />
          </div>
          <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Master Work #{index + 1}</span>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors ${isLarge ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-white/50 group-hover:text-cyan-400/80 transition-colors">
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-auto">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 text-xs font-bold transition-all"
          >
            <GithubIcon size={13} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#050505] relative z-10">
      <div className="container mx-auto px-6">

        {/* ── MASTER WORKS ── */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3"
              >
                ✦ Deployed &amp; Live
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                MASTER <span className="text-gradient">WORKS</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/50 max-w-xl"
              >
                My top 5 best projects — all deployed live. Click to explore them in action or view the source code.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((project, idx) => (
              <FeaturedCard key={project.title} project={project} index={idx} />
            ))}
          </div>
        </div>

        {/* ── ALL PROJECTS ── */}
        <div>
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
                A broader selection of high-performance technical projects combining AI, automation, and full-stack architecture.
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

      </div>
    </section>
  );
}
