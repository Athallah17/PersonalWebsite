"use client";

import { SectionHeading } from "@components/atoms/section-heading";
import { AboutBio } from "@components/molecules/about-bio";
import TechStack from "@components/molecules/tech-stack";
import ProfileCard from "@components/molecules/profile-card";
import { useTheme } from "next-themes";

export function AboutSection() {
    const { theme } = useTheme();
    return (
    <section
        id="about"
        data-theme={theme}
        className={`
            w-full py-24 flex flex-col items-center gap-14
            bg-linear-to-b 
            from-[#f4f8f8] to-[#dbf6ff]     /* LIGHT MODE: soft blues/pastels */
            dark:from-[#040606] dark:to-[#1c312d] /* DARK MODE: deep cyberpunk green/black */
            transition-colors duration-300
        `}
    >
        <SectionHeading title="About Me" />
        {/* MAIN ABOUT GRID */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 -ml-5 items-start">
            {/* LEFT:  */}
            <div className="flex justify-center md:justify-start relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative z-10 p-6">
                    <AboutBio />
                </div>
            </div>

            {/* RIGHT:O */}
            <div className="flex justify-center md:justify-start">
            <ProfileCard/>
            </div>

        </div>

        {/* TECH STACK CAROUSEL */}
        <TechStack />
        {/* <TechLoop /> */}
        </section>
  );
}
