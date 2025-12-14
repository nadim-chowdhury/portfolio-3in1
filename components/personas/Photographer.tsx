"use client";

import { motion } from "framer-motion";

export default function Photographer() {
  const images = [
    { src: "/placeholder1.jpg", rotate: -2, x: -10, y: 10 },
    { src: "/placeholder2.jpg", rotate: 3, x: 20, y: -20 },
    { src: "/placeholder3.jpg", rotate: -1, x: -5, y: 5 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-white text-black overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6"
        >
          Visual Storyteller
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-7xl md:text-[10rem] font-serif mb-8 tracking-wide leading-none"
        >
          Nadim.
        </motion.h1>

        {/* Scattered Gallery */}
        <div className="relative h-[400px] md:h-[500px] w-full mb-12">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                rotate: img.rotate * 5,
                x: img.x * 2,
                y: img.y * 2,
              }}
              animate={{ opacity: 1, rotate: img.rotate, x: img.x, y: img.y }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
              className="absolute w-64 md:w-80 aspect-[3/4] bg-neutral-100 shadow-2xl border-8 border-white group cursor-pointer"
              style={{
                left: `${30 + i * 20}%`,
                top: "10%",
              }}
            >
              <div className="w-full h-full bg-neutral-200" />
              <div className="absolute bottom-4 left-4 text-xs font-serif italic text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                Capture 0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl md:text-2xl font-light text-gray-600 max-w-xl mx-auto leading-relaxed mb-12"
        >
          Capturing the chaos and beauty of Bangladesh.
        </motion.p>

        <button className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-500 uppercase tracking-widest text-xs">
          Enter Gallery
        </button>
      </div>
    </div>
  );
}
