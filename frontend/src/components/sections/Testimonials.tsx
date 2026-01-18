"use client";

import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    text: "The speed of delivery is what blew me away. I ordered on Monday and had my tech gear by Wednesday morning. Unbeatable service.",
    author: "Sarah M.",
    role: "Product Designer",
    initials: "SM",
    color: "bg-blue-100 text-blue-600"
  },
  {
    text: "The quality of the premium items is evident the moment you open the box. Finally, a shop that values quality over quantity.",
    author: "James K.",
    role: "Software Engineer",
    initials: "JK",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    text: "Intuitive shopping experience. The UI is clean, and the checkout process is a breeze. Highly recommended for busy professionals.",
    author: "Emma R.",
    role: "Creative Director",
    initials: "ER",
    color: "bg-purple-100 text-purple-600"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none">
        <Quote size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Trusted by thousands.
          </motion.h2>
          <p className="mt-4 text-slate-500 text-lg">Don't just take our word for it.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 group"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-8 relative">
                  <span className="text-slate-300 font-serif text-4xl absolute -top-4 -left-2 opacity-50">"</span>
                  {t.text}
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-slate-900 leading-none">{t.author}</p>
                    <CheckCircle2 size={14} className="text-blue-500" />
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}