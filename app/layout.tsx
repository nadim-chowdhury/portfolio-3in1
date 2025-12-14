import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Space_Grotesk,
  Comic_Neue,
} from "next/font/google";
import "./globals.css";
import { PersonaProvider } from "@/context/PersonaContext";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Nadim Chowdhury | Trifecta Portfolio",
  description: "Developer, Photographer, Gamer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrains.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <PersonaProvider>{children}</PersonaProvider>
      </body>
    </html>
  );
}
