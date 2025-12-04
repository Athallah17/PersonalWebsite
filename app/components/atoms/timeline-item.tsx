"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TimelineItem({
  icon,
  role,
  company,
  period,
  location,
  description,
}: {
  icon?: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative flex gap-6 pb-12"
    >
      {/* Icon + timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-white dark:bg-neutral-900 shadow flex items-center justify-center overflow-hidden border border-border">
          {icon ? (
            <Image src={icon} alt="logo" width={120} height={120} />
          ) : (
            <div className="w-3 h-3 rounded-full bg-primary" />
          )}
        </div>

        {/* Vertical line */}
        <div className="flex-1 w-[2px] bg-border mt-2"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold">{role}</h3>
        <p className="text-md text-muted-foreground">
          {company} • {period}
        </p>
        {location && (
          <p className="text-md font-semibold text-muted-foreground">{location}</p>
        )}
        <p className="text-md font-semibold leading-relaxed pt-1">{description}</p>
      </div>
    </motion.div>
  );
}
