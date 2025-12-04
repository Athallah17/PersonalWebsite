"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
export function AboutBio() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

    return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className={`
        max-w-2xl text-justify leading-relaxed text-lg
        p-6 rounded-lg shadow-lg
        transition-colors duration-500
        ${isDark ? "bg-white/10 text-white/90" : "bg-black/10 text-black/90"}
      `}
    >
    <p className="text-justify mb-5"> <span className="text-primary font-medium hover:font-bold">I’m a Frontend–Fullstack Developer and Computer Engineering graduate from Institut Teknologi Sepuluh Nopember (ITS)</span>, where I specialized in Multimedia & Telematics. My journey blends software engineering, user experience design, and system-level thinking allowing me to approach problems not only from a coding perspective but also from architecture, usability, and long-term maintainability. I do believe great digital products are built at the intersection of thoughtful design, solid engineering, and clear problem understanding.
    </p>

    <p className="text-justify mb-5"> I work primarily with  <span className="text-primary font-medium hover:font-bold">React.js, Next.js, TypeScript, Node.js, Express.js, Laravel </span>, and am currently expanding my expertise in <span className="text-primary font-medium hover:font-bold">Golang</span> for backend and service oriented. I enjoy crafting applications that are clean, fast, scalable, and intuitive, with a strong emphasis on developer experience and code quality. My workflow often involves designing efficient component structures, building RESTful APIs, optimizing performance, and ensuring that the user interface feels effortless and enjoyable to use.
    </p>

    <p className="text-justify mb-5">
    Throughout my academic journey and personal projects, I’ve had the opportunity to explore a wide range of topics including <span className="text-primary font-medium hover:font-bold">web development, UI/UX fundamentals, cloud computing basics, AI principles, and embedded systems</span>. This diverse technical exposure has given me the adaptability to pick up new tools quickly, understand systems from end to end, and collaborate effectively with multidisciplinary teams. It also taught me how to bridge the gap between front-end aesthetics, backend logic, and real world problem solving.
    </p>

    <p className="text-justify mb-5 ">
     <span className="text-primary font-medium hover:font-bold">I am a strong believer in continuous learning. I enjoy diving into new frameworks, experimenting with modern technologies, and refining my approach to architecture, performance, and usability.</span> Whether I’m working on frontend interfaces, backend services, or full-stack features, my focus is always on building meaningful products that solve real problems and deliver a smooth, purposeful experience to users.
    </p>

    <p className="text-justify mb-5">
    Driven by curiosity, creativity, and a constant desire to improve, I aim to contribute to impactful digital solutions building software that is not only functional and scalable, but also thoughtful, maintainable, and enjoyable to use. I enjoy building products that combine  <span className="text-primary font-medium hover:font-bold">functionality, usability, and modern design</span> whether it's frontend, backend, or full-stack development.
    </p>

    </motion.div>
  );
}
