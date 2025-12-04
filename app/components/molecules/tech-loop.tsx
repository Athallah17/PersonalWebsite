import LogoLoop from "@components/atoms/tech-logo";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql,SiJavascript } from 'react-icons/si';
import { FaNodeJs,FaGolang,FaGitAlt } from "react-icons/fa6";

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <FaGolang />, title: "Go", href: "https://golang.org" },
    { node: <FaGitAlt />, title: "Git", href: "https://git-scm.com" },

];

function TechLoop() {
    return (
        <div style={{ padding: 5 }}>
            <div style={{ height: '300px', position: 'relative', overflow: 'hidden' }}>
                {/* Basic horizontal loop */}
                <LogoLoop
                    logos={techLogos}
                    speed={0.1}
                    direction="left"
                    logoHeight={48}
                    gap={50}
                    hoverSpeed={1}
                    scaleOnHover={true}
                    fadeOut={true}
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />
            </div>
        </div>
    );
}

export default TechLoop;