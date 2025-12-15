"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StreamBackground } from "@/components/stream/StreamBackground";
import { SocialTicker } from "@/components/stream/SocialTicker";
import { AnimatedText } from "@/components/stream/AnimatedText";

export default function StreamStarting() {
  const [dots, setDots] = useState(".");
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-between relative overflow-hidden font-jetbrains">
      {/* Background Grid Animation */}
      <StreamBackground />

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 w-full">
        <div className="text-center flex flex-col items-center">
          <AnimatedText
            text="STREAM"
            className="text-6xl md:text-8xl font-black text-white tracking-widest uppercase mb-4 text-shadow-glow"
          />
          <AnimatedText
            text="STARTING"
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 tracking-widest uppercase mb-4"
            gradient={true}
          />
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-green-500" />
          <span className="text-2xl text-green-400 font-bold tracking-[0.2em] relative">
            STAND BY
            <span className="absolute -inset-1 blur-sm bg-green-500/20 rounded-lg -z-10" />
          </span>
          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-green-500" />
        </div>

        <motion.div className="mt-16 text-9xl font-mono font-bold text-zinc-800 relative select-none">
          {formatTime(timeLeft)}
          <div className="absolute inset-0 text-stroke-green opacity-20 blur-sm">
            {formatTime(timeLeft)}
          </div>
          <div
            className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent"
            style={{ WebkitTextStroke: "2px #22c55e" }}
          >
            {formatTime(timeLeft)}
          </div>
        </motion.div>
      </div>

      <div className="w-full z-10 mb-8 px-8">
        <SocialTicker />
      </div>
    </div>
  );
}
