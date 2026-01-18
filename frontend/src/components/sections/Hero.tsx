"use client";

import { ChevronRight, ShoppingBag, Star, Zap, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  // Adding the Variants type fixes the TypeScript build error
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16 pb-12 md:pt-30 md:pb-20">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDk5LCAxMDIsIDI0MSwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Content */}
        <div className="text-left">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm"
          >
            <Shield size={14} className="text-blue-400" />
            Enterprise-Grade Security
          </motion.div>

          <motion.h1 
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-[1.1]"
          >
            Elevate Your
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
              Digital Commerce
            </span>
          </motion.h1>

          <motion.p 
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-base md:text-lg text-slate-300 mb-8 md:mb-10 max-w-xl leading-relaxed font-light"
          >
            Experience a sophisticated marketplace engineered for performance. 
            Advanced authentication protocols, real-time inventory management, 
            and seamless international logistics solutions.
          </motion.p>

          {/* ... Rest of your code remains the same ... */}
          {/* Note: I switched {...fadeInUp} to variants={fadeInUp} for better TS support */}
          
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/items"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg 
                       font-semibold text-base transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              <ShoppingBag size={20} />
              Explore Marketplace
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base 
                       text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Partner Portal
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
        
        {/* Right side product showcase remains the same */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          {/* ... main product card code ... */}
        </motion.div>
      </div>
    </section>
  )
}