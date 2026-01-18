"use client";

import { motion } from 'framer-motion';
import { Search, ShoppingCart, PackageCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: "Browse Products",
    description: "Explore our curated collection of premium tech and lifestyle essentials.",
    icon: Search,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Add to Cart",
    description: "Secure your favorites with a single click and manage your selection effortlessly.",
    icon: ShoppingCart,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    title: "Checkout & Enjoy",
    description: "Experience lightning-fast processing and global door-to-door delivery.",
    icon: PackageCheck,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-semibold tracking-widest uppercase text-sm"
            >
              The Process
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mt-2"
            >
              Simple. Fast. Secure.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-xs text-lg"
          >
            Getting your favorite items has never been this straightforward.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              {/* Icon & Number Header */}
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl ${step.bgColor} ${step.iconColor} flex items-center justify-center transition-transform duration-500 group-hover:rotate-12`}>
                  <step.icon size={28} />
                </div>
                <span className="text-4xl font-black text-slate-200 group-hover:text-slate-300 transition-colors italic">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Minimal Link Indicator */}
              <div className="flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                LEARN MORE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}