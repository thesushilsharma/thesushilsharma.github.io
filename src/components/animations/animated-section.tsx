"use client";
import { HTMLMotionProps, motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
}

export function AnimatedSection({ children, className, ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("container mx-auto px-4 py-12 md:px-6 md:py-16", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}