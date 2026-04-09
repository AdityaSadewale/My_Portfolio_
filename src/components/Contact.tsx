"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            GET IN <span className="text-gradient">TOUCH</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-xl"
          >
            Ready to collaborate on high-precision AI and Full-Stack projects. Let's build the future together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-[2rem] flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-xl font-bold">{RESUME_DATA.contact.email}</p>
                </div>
            </div>

            <div className="glass-card p-8 rounded-[2rem] flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Phone</h4>
                    <p className="text-xl font-bold">{RESUME_DATA.contact.phone}</p>
                </div>
            </div>

            <div className="glass-card p-8 rounded-[2rem] flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Location</h4>
                    <p className="text-xl font-bold">Pandharpur, Maharashtra</p>
                </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 ml-1">Name</label>
                    <input 
                        type="text" 
                        placeholder="Aditya Sadewale"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 ml-1">Email</label>
                    <input 
                        type="email" 
                        placeholder="aditya@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors"
                    />
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 ml-1">Subject</label>
                <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
            </div>

            <div className="mb-8">
                <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 ml-1">Message</label>
                <textarea 
                    rows={4}
                    placeholder="Tell me about your vision..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
                />
            </div>

            <button
                type="button"
                className="w-full py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all shadow-xl group"
            >
                TRANSMIT MESSAGE
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
