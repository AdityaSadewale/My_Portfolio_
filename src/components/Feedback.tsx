"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageSquare, Send, CheckCircle } from "lucide-react";

export function Feedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    setSubmitted(true);
    // In a real app, you'd send this to an API
  };

  return (
    <section id="feedback" className="py-24 relative z-10 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4"
                    >
                        VISITOR <span className="text-gradient">COMMENDATIONS</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/50 max-w-xl mx-auto"
                    >
                        Your feedback drives the evolution of this technical architecture. How was your experience?
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass p-8 md:p-12 rounded-[3rem] border border-white/5 relative shadow-2xl overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 blur-[100px] pointer-events-none" />
                    
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="relative z-10"
                            >
                                <div className="flex flex-col items-center mb-12">
                                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white/30 mb-8">System Rating</h4>
                                    <div className="flex gap-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setRating(star)}
                                                onMouseEnter={() => setHover(star)}
                                                onMouseLeave={() => setHover(0)}
                                                className="transition-all active:scale-90"
                                            >
                                                <Star
                                                    size={40}
                                                    className={`transition-all duration-300 ${
                                                        (hover || rating) >= star
                                                            ? "fill-yellow-500 text-yellow-500 scale-110 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                                                            : "text-white/20"
                                                    }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-xs font-bold text-white/40">
                                        {rating === 5 ? "Incredible Architecture" : 
                                         rating === 4 ? "Impressive Design" :
                                         rating === 3 ? "Standard Implementation" :
                                         rating === 2 ? "Needs Optimization" :
                                         rating === 1 ? "System Failure" : "Select a rating"}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <label className="block text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-4 ml-2">Comments (Optional)</label>
                                    <div className="relative">
                                        <div className="absolute top-4 left-6 text-white/20">
                                            <MessageSquare size={20} />
                                        </div>
                                        <textarea
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            placeholder="What caught your eye?"
                                            rows={4}
                                            className="w-full bg-white/5 border border-white/5 rounded-3xl pl-16 pr-8 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={rating === 0}
                                    className={`w-full py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all ${
                                        rating > 0 
                                        ? "bg-white text-black hover:bg-purple-500 hover:text-white shadow-xl" 
                                        : "bg-white/5 text-white/20 cursor-not-allowed"
                                    }`}
                                >
                                    SUBMIT FEEDBACK
                                    <Send size={20} />
                                </button>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12 relative z-10"
                            >
                                <div className="w-24 h-24 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                                    <CheckCircle size={48} />
                                </div>
                                <h3 className="text-3xl font-black mb-4">FEEDBACK RECEIVED</h3>
                                <p className="text-white/40 max-w-sm mx-auto mb-8">
                                    Your data has been successfully integrated into the system improvements queue.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-purple-400 font-bold hover:text-white transition-colors text-sm uppercase tracking-widest"
                                >
                                    Submit another
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    </section>
  );
}
