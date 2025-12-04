
import { motion } from "framer-motion";
import LetterGlitch from "@components/atoms/letter-glitch";
import SocialSection from "@components/organisms/socials";

export function HeroSection() {
    return (
<section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND GLITCH EFFECT */}
        <div className="absolute inset-0 -z-10">
            <LetterGlitch
            glitchSpeed={100}
            centerVignette={true}
            outerVignette={true}
            smooth={true}
            />
        </div>

        {/* FOREGROUND CONTENT */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl px-4"
        >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Athallah Khairi </span>
            </h1>

            <p className="text-muted-foreground text-lg text-black font-medium dark:text-white">
            A Computer Engineering Fresh Graduate, interested in Full Stack Development and Software Development, building fast, modern, and intuitive experiences.
            Curious and driven by continuous learning, I enjoy crafting products that blend functionality, usability, and contemporary design.
            </p>

            <div className="mt-8 flex justify-center">
            <SocialSection show={["github", "linkedin"]} />
            </div>
        </motion.div>

        </section>
    );
}
