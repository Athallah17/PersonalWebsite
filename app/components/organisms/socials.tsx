import React from "react";
import { SiGmail, SiLinkedin, SiGithub, SiInstagram, SiReaddotcv } from "react-icons/si";

const allSocials = [
  {
    key: "email",
    icon: <SiGmail className="w-12 h-12" />,
    label: "Email",
    value: "athallahyaristyan@gmail.com",
    href: "mailto:athallahyaristyan@gmail.com",
  },
  {
    key: "linkedin",
    icon: <SiLinkedin className="w-12 h-12" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/athallahkhairi",
    username: "athallahkhairi",
  },
  {
    key: "github",
    icon: <SiGithub className="w-12 h-12" />,
    label: "GitHub",
    href: "https://github.com/Athalllah17",
    username: "@Athalllah17",
  },
  {
    key: "instagram",
    icon: <SiInstagram className="w-12 h-12" />,
    label: "Instagram",
    href: "https://instagram.com/yaristyanath",
    username: "@yaristyanath",
  },
  {
    key: "resume",
    icon: <SiReaddotcv className="w-12 h-12" />,
    label: "Resume",
    value: "Download My Resume",
    href: "/Athallah_Khairi_Resume.pdf",
  },
];

export type SocialKey = "email" | "linkedin" | "github" | "instagram" | "resume";

interface SocialSectionProps {
  readonly show?: SocialKey[];
}

export default function SocialSection({ show }: Readonly<SocialSectionProps>) {
  const socials = show
    ? allSocials.filter(social => show.includes(social.key as SocialKey))
    : allSocials;

  return (
    <div className="flex items-center justify-center p-6 relative">
      <div className="max-w-7xl w-full text-center relative">
        <div className="flex items-center justify-center gap-4 mb-8">
          {socials.map((social) => (
            <a
              key={social.key}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative backdrop-blur-md bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              {/* Icon */}
              <div className="text-slate-400 group-hover:text-white transition-colors duration-300">
                {social.icon}
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 -z-10 blur-xl"></div>
              {/* Tooltip */}
              {(social.username || social.value) && (
                <span className="absolute bottom-full mb-2 w-max max-w-xs left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  {social.username || social.value}
                </span>
              )}
            </a>
          ))}
        </div>
        {/* Divider Line */}
        <div className="relative mb-8">
          <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        {/* Decorative blur effects */}
        {/* <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30 -z-10"></div> */}
      </div>
    </div>
  );
}
