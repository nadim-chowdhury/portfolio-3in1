"use client";

import { usePersona } from "@/context/PersonaContext";
import ModeSwitcher from "@/components/ui/ModeSwitcher";
import SocialDock from "@/components/shared/SocialDock";
import Developer from "@/components/personas/Developer";
import Photographer from "@/components/personas/Photographer";
import Gamer from "@/components/personas/Gamer";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { MouseEvent } from "react";

function SpotlightCard({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-gray-900/50 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

export default function Home() {
  const { activePersona, setPersona } = usePersona();

  if (!activePersona) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 transition-colors duration-500 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,1),_rgba(0,0,0,1))] -z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 pointer-events-none" />

        <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-center bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          Choose Your Character
        </h1>

        <div className="flex flex-col md:flex-row gap-8 perspective-1000">
          <SpotlightCard
            onClick={() => setPersona("developer")}
            className="w-64 h-80 rounded-xl cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center h-full p-6">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                💻
              </div>
              <h2 className="font-mono text-xl text-cyan-400 mb-2">
                &lt;Developer /&gt;
              </h2>
              <p className="text-sm text-gray-500 font-mono text-center">
                System Architect
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard
            onClick={() => setPersona("photographer")}
            className="w-64 h-80 rounded-xl cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center h-full p-6">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                📸
              </div>
              <h2 className="font-serif text-2xl italic mb-2">Photographer</h2>
              <p className="text-sm text-gray-500 text-center">
                Visual Storyteller
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard
            onClick={() => setPersona("gamer")}
            className="w-64 h-80 rounded-xl cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center h-full p-6">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform skew-x-[-10deg] duration-300">
                🎮
              </div>
              <h2 className="font-black text-2xl uppercase tracking-widest text-fuchsia-500 mb-2">
                Gamer
              </h2>
              <p className="text-sm text-gray-500 uppercase tracking-wide text-center">
                Pro Player
              </p>
            </div>
          </SpotlightCard>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden transition-colors duration-500">
      <ModeSwitcher />

      <AnimatePresence mode="wait">
        {activePersona === "developer" && (
          <motion.div
            key="dev"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Developer />
          </motion.div>
        )}

        {activePersona === "photographer" && (
          <motion.div
            key="photo"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "circOut" }}
          >
            <Photographer />
          </motion.div>
        )}

        {activePersona === "gamer" && (
          <motion.div
            key="gamer"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <Gamer />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-0 w-full pb-8 z-40 pointer-events-none">
        <div className="pointer-events-auto">
          <SocialDock />
        </div>
      </div>
    </main>
  );
}
