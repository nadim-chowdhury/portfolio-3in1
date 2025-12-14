"use client";

import { usePersona, Persona } from "@/context/PersonaContext";
import { motion } from "framer-motion";
import { Monitor, Camera, Gamepad2 } from "lucide-react";

export default function ModeSwitcher() {
  const { activePersona, setPersona } = usePersona();

  const modes: { id: Persona; label: string; icon: React.ReactNode }[] = [
    { id: "developer", label: "Dev", icon: <Monitor size={20} /> },
    { id: "photographer", label: "Photo", icon: <Camera size={20} /> },
    { id: "gamer", label: "Gamer", icon: <Gamepad2 size={20} /> },
  ];

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setPersona(mode.id)}
            className={`
              relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300
              ${
                activePersona === mode.id
                  ? "text-white"
                  : "text-white/50 hover:text-white/80"
              }
            `}
          >
            {activePersona === mode.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-accent rounded-full -z-10 opacity-80"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{mode.icon}</span>
            {activePersona === mode.id && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="relative z-10 text-sm font-bold whitespace-nowrap overflow-hidden"
              >
                {mode.label}
              </motion.span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
