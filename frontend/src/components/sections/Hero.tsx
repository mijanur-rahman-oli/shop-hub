"use client";

import { ChevronRight, ShoppingBag, Star, Zap, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
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
            {...fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm"
          >
            <Shield size={14} className="text-blue-400" />
            Enterprise-Grade Security
          </motion.div>

          <motion.h1 
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-[1.1]"
          >
            Elevate Your
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
              Digital Commerce
            </span>
          </motion.h1>

          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-300 mb-8 md:mb-10 max-w-xl leading-relaxed font-light"
          >
            Experience a sophisticated marketplace engineered for performance. 
            Advanced authentication protocols, real-time inventory management, 
            and seamless international logistics solutions.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-6 mb-10 text-sm text-slate-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span>PCI DSS Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span>24/7 Support</span>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.3 }}
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

          {/* Social Proof */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-slate-800"
          >
            <div className="flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-white">50K+</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Active Users</p>
              </div>
              <div className="w-px h-10 bg-slate-800"></div>
              <div>
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Uptime SLA</p>
              </div>
              <div className="w-px h-10 bg-slate-800"></div>
              <div>
                <p className="text-2xl font-bold text-white">4.9/5</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Customer Rating</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Product Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          {/* Main Product Card */}
          <div className="relative z-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            <div className="p-8">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 mb-6 flex items-center justify-center overflow-hidden border border-white/5 shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" 
                  alt="Premium Wireless Headphones"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2 px-3 py-1 bg-blue-400/10 rounded-full">
                    Premium Audio
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">Wireless Pro Max</h3>
                </div>
                <div className="flex items-center gap-1 text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full">
                  <Star size={14} className="fill-amber-400"/>
                  <span className="text-sm font-semibold">4.9</span>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Professional-grade audio with advanced active noise cancellation and spatial audio technology.
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Starting at</p>
                  <span className="text-3xl font-bold text-white">$299</span>
                  <span className="text-slate-500 text-sm">.00</span>
                </div>
                <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-slate-100 transition-all hover:shadow-lg active:scale-95">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Floating Stats Card */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 z-20 bg-white px-5 py-4 rounded-2xl shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                <TrendingUp size={22} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Inventory Status</p>
                <p className="text-slate-900 font-bold text-base leading-tight">In Stock</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}