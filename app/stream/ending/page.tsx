"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  Twitch,
  Music2,
} from "lucide-react";

const socials = [
  {
    name: "Facebook",
    storeName: "Gamerxlieo",
    handle: "@gxlieo",
    url: "https://www.facebook.com/gxlieo",
    icon: Facebook,
    color: "text-blue-500",
  },
  {
    name: "YouTube",
    storeName: "Gxlieo",
    handle: "@gxlieo",
    url: "https://www.youtube.com/@gxlieo",
    icon: Youtube,
    color: "text-red-500",
  },
  {
    name: "Twitter",
    storeName: "Nadim Chowdhury",
    handle: "@nadim_ch0wdhury",
    url: "https://x.com/nadim_ch0wdhury",
    icon: Twitter,
    color: "text-blue-400",
  },
  {
    name: "Instagram",
    storeName: "Nadim Chowdhury",
    handle: "@nadim_ch0wdhury",
    url: "https://www.instagram.com/nadim_ch0wdhury",
    icon: Instagram,
    color: "text-pink-500",
  },
  {
    name: "Twitch",
    storeName: "Gxlieo",
    handle: "@gxlieo",
    url: "https://www.twitch.tv/gxlieo",
    icon: Twitch,
    color: "text-purple-500",
  },
  {
    name: "TikTok",
    storeName: "Gamerxlieo",
    handle: "@gxlieo",
    url: "https://www.tiktok.com/@gxlieo",
    icon: Music2,
    color: "text-pink-400",
  },
];

import { AnimatedText } from "@/components/stream/AnimatedText";
import { StreamBackground } from "@/components/stream/StreamBackground";

export default function StreamEnding() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden font-jetbrains">
      {/* Background Glitch Effects */}
      <StreamBackground />

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center gap-12 w-full max-w-6xl px-8">
        <div className="text-center flex flex-col items-center">
          <AnimatedText
            text="STREAM"
            className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter mb-2"
          />
          <AnimatedText
            text="ENDED"
            className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter mb-2"
            gradient={true}
          />
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            className="text-xl md:text-2xl text-zinc-400 font-light uppercase mt-4"
          >
            Thanks for watching
          </motion.p>
        </div>

        {/* Social Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {socials.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
            >
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 bg-zinc-900/50 hover:bg-zinc-800/80 border border-zinc-800 hover:border-green-500/50 p-4 rounded-xl transition-all duration-300 backdrop-blur-sm overflow-hidden"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`}
                />
                <div
                  className={`p-3 rounded-lg bg-black/50 ${social.color} group-hover:scale-110 transition-transform`}
                >
                  <social.icon size={24} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold truncate">
                    {social.name}
                  </span>
                  <span className="text-white font-mono text-lg font-bold truncate">
                    {social.storeName}
                  </span>
                  <span className="text-sm text-green-500/80 font-mono truncate">
                    {social.handle}
                  </span>
                </div>
                <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity text-green-500">
                  →
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-zinc-600 font-mono text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          // SEE YOU NEXT TIME //
        </motion.div>
      </div>
    </div>
  );
}
