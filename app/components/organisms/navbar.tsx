"use client";


import { Logo } from "@components/atoms/logo";
import { ThemeToggle } from "@components/atoms/theme-toggle";
import { NavLinks } from "@components/molecules/nav-links";
import { motion } from "framer-motion";

export function Navbar() {
return (
    <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full fixed top-0 left-0 z-50 backdrop-blur-md border-b border-white/10"
        >
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
            <Logo />
            <NavLinks />
            <ThemeToggle />
        </div>
        </motion.nav>
    );
}
