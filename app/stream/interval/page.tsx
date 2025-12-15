"use client";

import { motion } from "framer-motion";
import { StreamBackground } from "@/components/stream/StreamBackground";
import { SocialTicker } from "@/components/stream/SocialTicker";
import { Coffee, MessageCircle } from "lucide-react";
import { AnimatedText } from "@/components/stream/AnimatedText";

export default function StreamInterval() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-between relative overflow-hidden font-jetbrains">
      {/* Background Pulse */}
      <StreamBackground />

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 w-full">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <Coffee size={80} className="text-green-500 drop-shadow-green" />
          </motion.div>

          <div className="text-center flex flex-col items-center">
            <AnimatedText
              text="BE RIGHT"
              className="text-7xl font-black text-white uppercase tracking-tighter mix-blend-difference"
            />
            <AnimatedText
              text="BACK"
              className="text-7xl font-black text-green-500 uppercase tracking-tighter"
            />
          </div>

          <div className="flex flex-col items-center gap-2 mt-4 text-zinc-400">
            <motion.div
              className="flex items-center gap-2 text-xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageCircle size={24} />
              <span>Chat is currently muted</span>
            </motion.div>
            <p className="text-sm opacity-50 uppercase tracking-widest">
              Don't go anywhere
            </p>
          </div>
        </motion.div>
      </div>

      <div className="w-full z-10 mb-8 px-8">
        <SocialTicker />
      </div>
    </div>
  );
}
