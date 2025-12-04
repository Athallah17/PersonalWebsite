"use client";

import { SectionHeading } from "@components/atoms/section-heading";
import ProjectCard  from "@components/molecules/project-card";
import { GitHubCalendar } from "react-github-calendar";

const projects = [
{
name: "ExpenSAVE – Smart Expense Manager",
description: "A full-stack expense tracker + group bill splitting app with real-time balance updates.  It allows users to create groups, record shared expenses, and automatically calculate individual balances in real-time. ",
tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "Golang","PostgreSQL", "Tailwind"],
github: "https://github.com/Athallah17/Expensave-FE",
live: "https://expensave.vercel.app",
image: "/expensave.png",
},
{
name: "Stockbot - AI-Powered Investment Advisor Chatbot for Stock Market Prediction and Recommendation",
description: "an AI-powered investment advisor chatbot integrating Large Language Model (LLM) with real-time stock market data, technical analysis, sentiment analysis, and predictive modeling. The system is capable of analyzing historical stock data, generating trend predictions, and providing buy/sell recommendations with reasoning in natural language.",
tech: ["Python", "TensorFlow", "Flask", "PostgreSQL", "Next.js, TypeScript", "Tailwind"],
github: "https://github.com/Athallah17/StockChatbot",
live: "https://stockerschatbot.vercel.app",
image: "/stockbot.png",
},
{
name: "Ghosted - Job Application Dashboard Tracker",
description: "Some companies ghost you. Ghosted doesn’t.Track every application, every status, every silence. Stay organized, stay motivated, and watch your job search journey come to life.Ghosted keeps track of everything—applications, responses, interviews, the ones who loved you, and the ones who straight-up vanished.",
tech: ["Next.js", "Node.js", "Express", "PostgreSQL", "Tailwind"],
github: "https://github.com/Athallah17/Ghosted",
live: "",
image: "/ghosted.png",
},
{
name: "Helmdall - Safety Helmet with Drowsiness Detection",
description: "A smart safety helmet equipped with sensors to detect drowsiness and alert the wearer.",
tech: ["TensorFlow", "Flask", "PostgreSQL", "React.js", "Android Studio", "Tailwind"],
github: "https://github.com/Athallah17/AppHelmdall",
live: "",
image: "/helmdall.png",
},
{
name: "Burung Biru - Social Media Clone",
description: "Facebook Social Media Clone App. Create With React Native and Firebase. User can Post, Comment, Like, and Share Post.",
tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind"],
github: "https://github.com/Athallah17/SocialMedia",
live: "https://burungbiruapp.vercel.app",
image: "/fbcl1.png",
},
{
name: "Blackjack Real-Time Game",
description: "A real-time multiplayer Built a blackjack game using OpenCV and computer vision to detect card symbols and ranks from camera input. Implemented a bot dealer that makes decisions (hit/stand) based on game rules.",
tech: ["Python", "OpenCV"],
github:"https://github.com/Athallah17/PlayingCardsUsingCNN",
live: "",
image: "/blackjack.png",
}
];


export default function ProjectSection() {
return (
    <section
    id="projects"
    className={`
        w-full py-20 flex flex-col items-center
        bg-gradient-to-b 
        from-[#dbf6ff] to-[#dbf6ff]     /* LIGHT MODE: soft blues/pastels */
        dark:from-[#1c312d] dark:to-[#1c312d] /* DARK MODE: deep cyberpunk green/black */
        transition-colors duration-300
    `}
    >
    <SectionHeading title="Projects" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {projects.map((project, index) => (
    <ProjectCard key={index} project={project} />
    ))}
    </div>
    <div className="w-full max-w-4xl mt-20 px-6">
      {/* <GitHubContributions username="athallah17" /> */}
      {/* <GitHubCalendar username="athallah17" blockSize={15} blockMargin={5} fontSize={16} /> */}
    </div>
    </section>
);
}
