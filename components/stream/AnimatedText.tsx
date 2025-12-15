"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    },
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  gradient?: boolean;
}

export const AnimatedText = ({
  text,
  className = "",
  gradient = false,
}: AnimatedTextProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-wrap justify-center ${className}`}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="relative inline-block" // Needed for transforms
        >
          <motion.span
            animate={{
              y: [0, -5, 0],
              filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
              textShadow: [
                "0 0 0px rgba(74, 222, 128, 0)",
                "0 0 10px rgba(74, 222, 128, 0.5)",
                "0 0 0px rgba(74, 222, 128, 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1 + index * 0.1, // Stagger the loop slightly
            }}
            className={
              gradient
                ? "inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700"
                : "inline-block"
            }
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </motion.span>
      ))}
    </motion.div>
  );
};
