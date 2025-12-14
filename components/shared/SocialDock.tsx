"use client";

import { usePersona } from "@/context/PersonaContext";
import { socialLinks } from "@/data/socials";
import {
  Github,
  Linkedin,
  Code2,
  Twitter,
  Twitch,
  Youtube,
  Video,
  Facebook,
  Instagram,
  Camera,
} from "lucide-react";

// Map string icon names to components
const IconMap: { [key: string]: any } = {
  Github,
  Linkedin,
  Code2,
  Twitter,
  Twitch,
  Youtube,
  Video,
  Facebook,
  Instagram,
  Camera,
};

export default function SocialDock() {
  const { activePersona } = usePersona();

  if (!activePersona) return null;

  // Filter links based on active persona
  const typeMap: { [key: string]: string } = {
    developer: "dev",
    photographer: "photo",
    gamer: "gamer",
  };

  const currentType = typeMap[activePersona];
  const visibleLinks = socialLinks.filter((link) => link.type === currentType);

  return (
    <div className="flex justify-center gap-6 mt-8">
      {visibleLinks.map((link) => {
        const Icon = IconMap[link.icon] || Code2;
        return (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 transition-transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <Icon
              size={24}
              className="text-white/70 group-hover:text-accent transition-colors relative z-10"
            />
            <span className="sr-only">{link.name}</span>
          </a>
        );
      })}
    </div>
  );
}
