"use client";

import { useState, useEffect } from "react";

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
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="max-w-3xl w-full relative z-10">
        <div className="text-accent text-sm mb-4 font-mono animate-bounce">
          &gt; SYSTEM.INIT_SEQUENCE_COMPLETE
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
          NADIM_CHOWDHURY
        </h1>

        <div className="border border-white/20 bg-black/60 p-6 rounded-sm backdrop-blur-sm mx-auto max-w-2xl text-left font-mono text-sm md:text-base leading-relaxed shadow-sm shadow-accent/20">
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
          <div className="border border-white/10 p-4 bg-black/40 hover:border-accent/50 transition-colors">
            <h3 className="text-accent mb-2">&gt; STACK_TRACE</h3>
            <ul className="space-y-1 text-gray-400">
              <li>- Next.js / React</li>
              <li>- TypeScript / Node</li>
              <li>- Tailwind / CSS</li>
              <li>- Postgres / Prisma</li>
            </ul>
          </div>
          <div className="border border-white/10 p-4 bg-black/40 hover:border-accent/50 transition-colors">
            <h3 className="text-accent mb-2">&gt; ACTIVE_PROCESSES</h3>
            <ul className="space-y-1 text-gray-400">
              <li>[RUNNING] Portfolio_v3</li>
              <li>[IDLE] Open_Source_Contrib</li>
              <li>[PENDING] System_Upgrade</li>
            </ul>
          </div>
        </div>

        <div className="group cursor-pointer inline-flex items-center gap-2 text-accent border border-accent/20 px-6 py-3 hover:bg-accent/10 transition-colors">
          <span>INITIALIZE_HANDSHAKE</span>
          <span className="group-hover:translate-x-1 transition-transform">
            &gt;
          </span>
        </div>
      </div>
    </div>
  );
}
