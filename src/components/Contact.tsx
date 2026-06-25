"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';
import { RESUME_DATA } from "@/lib/data";

export function Contact() {
  const [state, handleSubmit] = useForm("mzdqlppz");

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
          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center h-full min-h-[400px]"
            >
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                  <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-black mb-4">MESSAGE SENT</h3>
              <p className="text-white/50 max-w-sm">
                  Thanks for reaching out! I'll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label htmlFor="name" className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 ml-1">Name</label>
                    <input 
                        id="name"
                        name="name"
                        type="text" 
                        placeholder="Aditya Sadewale"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                    <label htmlFor="email" className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 ml-1">Email</label>
                    <input 
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="aditya@example.com"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="subject" className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 ml-1">Subject</label>
                <input 
                    id="subject"
                    name="subject"
                    type="text" 
                    placeholder="Project Inquiry"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
            </div>

            <div className="mb-8">
                <label htmlFor="message" className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 ml-1">Message</label>
                <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your vision..."
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {state.submitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
