"use client";

import LandingLayout from "./components/templates/landing-layout";
import { HeroSection } from "./components/organisms/hero-section";
import { AboutSection } from "./components/molecules/about-section";
import ProjectsSection  from "./components/organisms/project-section";
import { ContactSection } from "./components/organisms/contact-info";
import { ExperienceSection } from "./components/organisms/experience-section";
export default function Home() {
  return (
    <LandingLayout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </LandingLayout>
  );
}
