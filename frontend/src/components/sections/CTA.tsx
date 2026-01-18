"use client";
import { motion } from 'framer-motion';

export default function LogoCloud() {
  const logos = ["Acme", "Global", "Vertex", "Pulse", "Echo"];

  return (
    <section className="py-12 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-[0.2em] mb-10">
          Trusted by the world's most innovative brands
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <span key={logo} className="text-2xl font-bold text-slate-900 tracking-tighter italic">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}