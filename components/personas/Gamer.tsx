"use client";

import { motion } from "framer-motion";

export default function Gamer() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center overflow-hidden relative">
      {/* Scanline Overlay */}
      <div className="scanline" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] z-20 pointer-events-none" />

      {/* Background Ambience */}
      <div className="max-w-5xl w-full relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/20 blur-[100px] -z-10 rounded-full opacity-50 pointer-events-none animate-pulse" />

        <h1 className="glitch text-7xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-none mb-2 skew-x-[-10deg] text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-purple-600 relative">
          <span className="absolute inset-0 text-red-500 opacity-70 translate-x-[2px] -z-10 blur-[1px]">
            GXLIEO
          </span>
          <span className="absolute inset-0 text-blue-500 opacity-70 translate-x-[-2px] -z-10 blur-[1px]">
            GXLIEO
          </span>
          GXLIEO
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-1 w-24 bg-accent skew-x-[-20deg]" />
          <p className="text-xl md:text-3xl font-bold uppercase tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Grinding Leaderboards
          </p>
          <div className="h-1 w-24 bg-accent skew-x-[-20deg]" />
        </div>

        <div className="flex gap-8 mb-12 justify-center font-bold text-sm tracking-wider relative z-30">
          <motion.div
            whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(34, 211, 238)" }}
            className="text-center p-4 bg-black/40 border border-white/10 backdrop-blur-md rounded-lg skew-x-[-10deg]"
          >
            <div className="text-accent text-lg">DIAMOND I</div>
            <div className="text-white/50 text-[10px] uppercase">Rank</div>
          </motion.div>
          <div className="text-center p-4 bg-black/40 border border-white/10 backdrop-blur-md rounded-lg skew-x-[-10deg]">
            <div className="text-purple-400 text-lg">2.4 K/D</div>
            <div className="text-white/50 text-[10px] uppercase">Ratio</div>
          </div>
          <div className="text-center p-4 bg-black/40 border border-white/10 backdrop-blur-md rounded-lg skew-x-[-10deg]">
            <div className="text-pink-400 text-lg">98%</div>
            <div className="text-white/50 text-[10px] uppercase">Winrate</div>
          </div>
        </div>

        <button className="relative group px-12 py-4 bg-accent text-white font-bold text-xl skew-x-[-10deg] hover:scale-105 transition-transform overflow-hidden">
          <span className="block skew-x-[10deg] relative z-10">JOIN LOBBY</span>
          <div className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
