"use client";

import { SectionHeading } from "@components/atoms/section-heading";
import { TimelineItem } from "@components/atoms/timeline-item";

export function ExperienceSection() {
    const work = [
    {
        icon: "/mansek.png",
        role: "Frontend Engineer Intern",
        company: "PT. Mandiri Sekuritas",
        period: "Sep 2024 – Dec 2024 ",
        location: "Jakarta, Indonesia — Onsite",
        description: `As a Frontend Engineer Intern, assigned to implement I implemented Mixpanel analytics to monitor user behavior and generate deeper insights for the Growin Invest web platform, while also developing a modular AI-powered popup chatbot, DIMA, designed to assist users with investment and market-related questions. Throughout the project, I closely collaborated with both engineering and product teams to ensure seamless integration, optimized user flows, and reliable frontend performance across the platform.`,
    },
  ];

  const organization = [
    {
      icon: "/bemfteic.jpeg",
      role: "Staff of Media Information",
      company: "FTEIC Student Executive Board",
      period: "2023 – 2024",
      location: "Surabaya, Indonesia",
      description:
        `As a Staff of Media Information, I created visual assets, crafted copywriting content, and developed social media materials to strengthen the organization’s branding and communication presence. I also produced engaging multimedia content—ranging from photography to videography—for digital campaigns and event promotions. Additionally, I worked closely with cross-division teams to ensure brand consistency and alignment across all communication platforms.`,
    },
    {
      icon: "/ukmsb.png",
      role: "Expert Staff of Communication and Information",
      company: "Sepakbola ITS Student Community Unit",
      period: "2023 – 2024",
      location: "Surabaya, Indonesia",
      description:
        "As an Expert Staff of Communication and Relations at UKM Sepakbola ITS, I designed social media grand designs and visual content to strengthen the organization’s digital presence. I also handled design quality assurance, ensuring every output met visual, branding, and consistency standards. Throughout the role, I collaborated closely with the communication team to maintain clear messaging, cohesive branding, and strong audience engagement across all platforms.",
    },
    {
        icon: "/mage.jpeg",
        role: "Head of Marketing Division",
        company: "Multimedia and Game 9",
        period: "2023 - 2024",
        location: "Surabaya, Indonesia",
        description:
        "As the Head of the Marketing Division, I led initiatives to expand the event’s visibility by building and maintaining strong relationships with media partners and external stakeholders. I developed strategic outreach plans to boost engagement across digital and offline platforms, ensuring consistent and compelling communication throughout the promotional campaign. Through coordinated efforts with the marketing team, I helped strengthen brand presence and maximize audience reach for the event."
    },
    {
        icon: "/himatekkom.png",
        role: "Volunteer",
        company: "Himatekkom Goes To School",
        period: "2022",
        location: "Surabaya, Indonesia",
        description:
        "As a Volunteer, I assisted and teach elementary school students about basic programming concepts and digital literacy. I helped organize interactive workshops and activities to make learning engaging and accessible for young learners. Additionally, I collaborated with fellow volunteers to ensure smooth event execution and provide support to students throughout the sessions."
    }
  ];

  return (
    <section id="experience" className="w-full py-24 flex flex-col gap-16
      bg-linear-to-b
        from-[#dbf6ff] to-[#577a86]     /* LIGHT MODE: soft blues/pastels */
        dark:from-[#1c312d] dark:to-[#1c312d] /* DARK MODE: deep cyberpunk green/black */
        transition-colors duration-300
      ">
      <SectionHeading title="Experience" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-12 justify-end">

        {/* Work Experience */}
        <div className="ml-8">
          <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
          {work.map((item, i) => (
            <TimelineItem key={i} {...item} />
          ))}
        </div>

        {/* Organization Experience */}
        <div className="ml-8">
          <h2 className="text-2xl font-bold mb-8">Organization Experience</h2>
          {organization.map((item, i) => (
            <TimelineItem key={i} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}
