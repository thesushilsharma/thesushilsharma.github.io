"use client";

import { motion } from "motion/react";
import { AnimatedSection } from "./animations/animated-section";
import RadialOrbital from "./radial-orbital-tech-stack";
import { techStack } from "@/config/site";
import { StarsPaths } from "./animations/stars-paths";

export function TechStackSection() {
  return (
    <AnimatedSection id="tech-stack" className="relative overflow-hidden py-12">
      {/* Background gradient */}

      <StarsPaths />
      <div className="relative z-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="space-y-2">
            <motion.div
              className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Technologies
            </motion.div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl lg:text-5xl">
              My Tech Stack
            </h2>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
            I work with a carefully selected set of modern technologies to build
            scalable, performant, and maintainable applications.
          </p>
          <div className="-mt-16">
            <RadialOrbital items={techStack} />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
