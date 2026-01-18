"use client";

import { motion } from 'framer-motion';
import { Zap, Shield, Users, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Get your products delivered within 2-3 business days with our priority global network.",
    color: "text-amber-500",
    bgColor: "bg-amber-50"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your transactions are protected with industry-standard 256-bit AES encryption.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Our dedicated customer service team is always here to help you via live chat or email.",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
          >
            The benchmark for <br /> modern commerce.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-slate-500 leading-relaxed"
          >
            We've built a platform that prioritizes your security and speed, 
            ensuring every purchase is as seamless as the first.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-0 border border-slate-100 rounded-[32px] overflow-hidden shadow-sm">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 bg-white border-b md:border-b-0 md:border-r border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bgColor} ${feature.color} mb-8 transition-transform duration-500 group-hover:scale-110`}>
                <feature.icon size={24} strokeWidth={2.5} />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                {feature.title}
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-400" />
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom Decorative Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}