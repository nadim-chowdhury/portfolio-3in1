export type SocialType = "dev" | "photo" | "gamer";

export interface SocialLink {
  name: string;
  url: string;
  type: SocialType;
  icon: string; // Using string identifiers for icons to keep data serializable
}

export const socialLinks: SocialLink[] = [
  // Developer Group
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nadim-chowdhury",
    type: "dev",
    icon: "Linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/nadim-chowdhury",
    type: "dev",
    icon: "Github",
  },
  {
    name: "Dev.to",
    url: "https://dev.to/nadim_ch0wdhury",
    type: "dev",
    icon: "Code2",
  }, // Code2 as generic code icon
  {
    name: "Twitter",
    url: "https://x.com/nadim_ch0wdhury",
    type: "dev",
    icon: "Twitter",
  },

  // Gamer Group
  {
    name: "Twitch",
    url: "https://www.twitch.tv/gxlieo",
    type: "gamer",
    icon: "Twitch",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@gxlieo",
    type: "gamer",
    icon: "Youtube",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@gxlieo",
    type: "gamer",
    icon: "Video",
  }, // Video as generic
  {
    name: "Facebook",
    url: "https://www.facebook.com/gxlieo",
    type: "gamer",
    icon: "Facebook",
  },

  // Photographer Group
  {
    name: "Instagram",
    url: "https://www.instagram.com/nadim_ch0wdhury",
    type: "photo",
    icon: "Instagram",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/nadim.ch0wdhury",
    type: "photo",
    icon: "Facebook",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@nadim-chowdhury",
    type: "photo",
    icon: "Youtube",
  },
];

export const contactInfo = {
  email: "nadim-chowdhury@outlook.com",
  phone: "+880 1971 258803",
  location: "Dhaka, Bangladesh",
};
