"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Code, User } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const navLinks = [
  { name: "About", href: "#about", icon: User },
  { name: "GitHub", href: RESUME_DATA.contact.github, icon: GithubIcon },
  { name: "LinkedIn", href: RESUME_DATA.contact.linkedin, icon: LinkedinIcon },
  { name: "LeetCode", href: RESUME_DATA.contact.leetcode, icon: Code },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="flex items-center justify-between px-6 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
        >
          {RESUME_DATA.name}
        </motion.div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center gap-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/70 hover:text-cyan-400 transition-colors"
                title={link.name}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="/ADITYA-SADEWALE-Resume_2026.pdf"
            download
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium text-xs md:sm transition-shadow relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 transform -skew-x-12" />
            <Download size={16} className="relative z-10" />
            <span className="relative z-10">Resume</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
