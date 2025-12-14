"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Persona = "developer" | "photographer" | "gamer" | null;

interface PersonaContextType {
  activePersona: Persona;
  setPersona: (persona: Persona) => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [activePersona, setActivePersona] = useState<Persona>(null);

  useEffect(() => {
    // Remove previous theme classes
    document.body.classList.remove("theme-dev", "theme-photo", "theme-gamer");

    // Add new theme class
    if (activePersona === "developer") {
      document.body.classList.add("theme-dev");
    } else if (activePersona === "photographer") {
      document.body.classList.add("theme-photo");
    } else if (activePersona === "gamer") {
      document.body.classList.add("theme-gamer");
    }
  }, [activePersona]);

  return (
    <PersonaContext.Provider
      value={{ activePersona, setPersona: setActivePersona }}
    >
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error("usePersona must be used within a PersonaProvider");
  }
  return context;
}
