"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  Twitch,
  Music2, // Using Music2 for TikTok as a fallback if logo isn't available, or I'll check if Lucide has TikTok now. It usually doesn't, so I might need a custom SVG or just text. Actually Lucide v0.561 might have it. I'll check or use a generic one.
} from "lucide-react";

// Lucide doesn't always have TikTok or X icons in older versions, but let's try to simulate or use generic.
// Actually, let's use a custom SVG for Tiktok and X if needed, or just standard Lucide icons that look close.
// For now, I'll use text labels or generic icons if specific ones are missing, but let's assume standard names or fallbacks.
// Wait, I can just use SVGs directly for best accuracy if Lucide is missing them.

const socials = [
  {
    name: "Facebook",
    storeName: "Gamerxlieo",
    url: "https://www.facebook.com/gxlieo",
    icon: Facebook,
    color: "hover:text-blue-500",
  },
  {
    name: "YouTube",
    storeName: "Gxlieo",
    url: "https://www.youtube.com/@gxlieo",
    icon: Youtube,
    color: "hover:text-red-500",
  },
  {
    name: "Twitter",
    storeName: "Nadim Chowdhury",
    url: "https://x.com/nadim_ch0wdhury",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    storeName: "Nadim Chowdhury",
    url: "https://www.instagram.com/nadim_ch0wdhury",
    icon: Instagram,
    color: "hover:text-pink-500",
  },
  {
    name: "Twitch",
    storeName: "Gxlieo",
    url: "https://www.twitch.tv/gxlieo",
    icon: Twitch,
    color: "hover:text-purple-500",
  },
  {
    name: "TikTok",
    storeName: "Gamerxlieo",
    url: "https://www.tiktok.com/@gxlieo",
    icon: Music2, // Fallback
    color: "hover:text-pink-400",
  },
];

export const SocialTicker = () => {
  return (
    <div className="w-full overflow-hidden bg-black/50 backdrop-blur-sm border-y border-green-500/20 py-3">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...socials, ...socials, ...socials].map((social, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 text-zinc-400 transition-colors ${social.color}`}
          >
            <social.icon size={20} />
            <span className="font-jetbrains text-sm font-bold tracking-wider">
              <span className="opacity-50 mr-1">{social.name}:</span>
              {social.storeName}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
