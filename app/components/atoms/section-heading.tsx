"use client";

import { motion } from "framer-motion";

export function SectionHeading({ title }: { title: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-12 text-center"
    >
      {title}
    </motion.h2>
  );
}
