"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Developer() {
  const [text, setText] = useState("");
  const fullText = "Building scalable solutions from Dhaka.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      {/* --- ENHANCED BACKGROUND LAYERS --- */}

      {/* 1. Animated Scrolling Grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* 2. Rotating Radar Sweep (Centered) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
        <div className="radar-sweep" />
      </div>

      {/* 3. Floating Binary Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-accent/20 font-mono text-xs pointer-events-none select-none"
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1000),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 800),
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.div>
      ))}

      {/* 4. Corner HUD Elements */}
      <div className="absolute top-8 left-8 border-t border-l border-white/20 w-8 h-8 pointer-events-none" />
      <div className="absolute top-8 right-8 border-t border-r border-white/20 w-8 h-8 pointer-events-none" />
      <div className="absolute bottom-8 left-8 border-b border-l border-white/20 w-8 h-8 pointer-events-none" />
      <div className="absolute bottom-8 right-8 border-b border-r border-white/20 w-8 h-8 pointer-events-none" />

      {/* --- CONTENT --- */}

      <div className="max-w-3xl w-full relative z-10">
        <div className="text-accent text-sm mb-4 font-mono animate-bounce">
          &gt; SYSTEM.INIT_SEQUENCE_COMPLETE
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
          NADIM_CHOWDHURY
        </h1>

        <div className="border border-white/20 bg-black/60 p-6 rounded-sm backdrop-blur-sm mx-auto max-w-2xl text-left font-mono text-sm md:text-base leading-relaxed shadow-sm shadow-accent/20 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-[2px] h-full bg-accent/50 opacity-0 group-hover:opacity-100 transition-opacity" />

          <p className="text-gray-400 mb-2">// Role: Full Stack Architect</p>
          <p className="mb-4">
            <span className="text-accent">const</span>{" "}
            <span className="text-white">mission</span> ={" "}
            <span className="text-green-400">"{text}"</span>
            <span className="animate-pulse">|</span>;
          </p>
          <p className="text-gray-400 text-xs mt-4">
            bash-3.2$ <span className="animate-pulse">_</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-12 text-left font-mono text-xs md:text-sm">
          <motion.div
            whileHover={{ scale: 1.02, borderColor: "rgba(34, 211, 238, 0.8)" }}
            className="border border-white/10 p-4 bg-black/40 transition-colors cursor-crosshair"
          >
            <h3 className="text-accent mb-2 flex justify-between">
              <span>&gt; STACK_TRACE</span>
              <span className="animate-pulse">●</span>
            </h3>
            <ul className="space-y-1 text-gray-400">
              <li>- Next.js / React</li>
              <li>- TypeScript / Node</li>
              <li>- Tailwind / CSS</li>
              <li>- Postgres / Prisma</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, borderColor: "rgba(34, 211, 238, 0.8)" }}
            className="border border-white/10 p-4 bg-black/40 transition-colors cursor-crosshair"
          >
            <h3 className="text-accent mb-2 flex justify-between">
              <span>&gt; ACTIVE_PROCESSES</span>
              <span className="animate-pulse">●</span>
            </h3>
            <ul className="space-y-1 text-gray-400">
              <li>[RUNNING] Portfolio_v3</li>
              <li>[IDLE] Open_Source_Contrib</li>
              <li>[PENDING] System_Upgrade</li>
            </ul>
          </motion.div>
        </div>

        <div className="group cursor-pointer inline-flex items-center gap-2 text-accent border border-accent/20 px-6 py-3 hover:bg-accent/10 transition-colors relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10">INITIALIZE_HANDSHAKE</span>
          <span className="group-hover:translate-x-1 transition-transform relative z-10">
            &gt;
          </span>
        </div>
      </div>
    </div>
  );
}
